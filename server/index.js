import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'data', 'feedback.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin2025!';

app.use(cors());
app.use(express.json());

// Serve static frontend build in production
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

// Ensure data file exists
function ensureDataFile() {
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// Read all feedback entries
function readFeedback() {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

// Write feedback entries
function writeFeedback(entries) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
}

// POST /api/feedback - Submit new feedback
app.post('/api/feedback', (req, res) => {
  const { name, selections, customSuggestion } = req.body;

  // Validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!selections || !Array.isArray(selections) || selections.length === 0) {
    return res.status(400).json({ error: 'At least one selection is required' });
  }
  if (selections.length > 3) {
    return res.status(400).json({ error: 'Maximum 3 selections allowed' });
  }

  const entry = {
    id: Date.now().toString(),
    name: name.trim(),
    selections,
    customSuggestion: customSuggestion ? customSuggestion.trim() : '',
    timestamp: new Date().toISOString(),
  };

  const entries = readFeedback();
  entries.push(entry);
  writeFeedback(entries);

  res.status(201).json({ message: 'Feedback submitted successfully', entry });
});

// GET /api/results - Get aggregated results (password protected)
app.get('/api/results', (req, res) => {
  const password = req.headers['x-admin-password'];

  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized. Invalid admin password.' });
  }

  const entries = readFeedback();

  // Aggregate selections
  const selectionCounts = {};
  const customSuggestions = [];

  entries.forEach((entry) => {
    entry.selections.forEach((selection) => {
      selectionCounts[selection] = (selectionCounts[selection] || 0) + 1;
    });
    if (entry.customSuggestion) {
      customSuggestions.push({
        name: entry.name,
        suggestion: entry.customSuggestion,
      });
    }
  });

  // Convert to chart-friendly format
  const chartData = Object.entries(selectionCounts).map(([name, value]) => ({
    name,
    value,
  }));

  res.json({
    totalResponses: entries.length,
    chartData,
    customSuggestions,
    entries,
  });
});

// SPA catch-all: serve index.html for any non-API routes
app.get('{*path}', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
