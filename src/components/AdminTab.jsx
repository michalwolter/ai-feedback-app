import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AdminTab.css';

const API_URL = '/api';

const COLORS = [
  '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
  '#ec4899', '#f43f5e', '#f97316', '#eab308',
  '#22c55e', '#14b8a6', '#06b6d4', '#3b82f6',
];

function AdminTab() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/results`, {
        headers: { 'x-admin-password': password },
      });

      if (!response.ok) {
        throw new Error('Invalid password. Please try again.');
      }

      const data = await response.json();
      setResults(data);
      setAuthenticated(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchResults = async () => {
    try {
      const response = await fetch(`${API_URL}/results`, {
        headers: { 'x-admin-password': password },
      });
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      }
    } catch (err) {
      console.error('Failed to refresh results:', err);
    }
  };

  useEffect(() => {
    if (authenticated) {
      const interval = setInterval(fetchResults, 10000);
      return () => clearInterval(interval);
    }
  }, [authenticated, password]);

  if (!authenticated) {
    return (
      <div className="admin-container">
        <div className="login-card">
          <div className="login-icon">🔐</div>
          <h2>Admin Access</h2>
          <p>Enter the admin password to view results.</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              className="form-input"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderCustomLabel = ({ name, percent }) => {
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div className="admin-container">
      <div className="dashboard-header">
        <h2>📊 Survey Results</h2>
        <div className="dashboard-meta">
          <span className="total-badge">
            {results.totalResponses} response{results.totalResponses !== 1 ? 's' : ''}
          </span>
          <button className="btn btn-secondary btn-sm" onClick={fetchResults}>
            🔄 Refresh
          </button>
        </div>
      </div>

      {results.chartData.length === 0 ? (
        <div className="empty-state">
          <p>No responses yet. Share the survey to start collecting feedback!</p>
        </div>
      ) : (
        <>
          <div className="chart-card">
            <h3>Use Case Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={results.chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomLabel}
                  outerRadius={140}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {results.chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} vote${value !== 1 ? 's' : ''}`, name]}
                />
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  wrapperStyle={{ fontSize: '13px', paddingLeft: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {results.customSuggestions.length > 0 && (
            <div className="suggestions-card">
              <h3>💡 Custom Suggestions</h3>
              <div className="suggestions-list">
                {results.customSuggestions.map((item, index) => (
                  <div key={index} className="suggestion-item">
                    <span className="suggestion-author">{item.name}:</span>
                    <span className="suggestion-text">{item.suggestion}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="responses-card">
            <h3>📋 All Responses</h3>
            <div className="responses-table-wrapper">
              <table className="responses-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Selections</th>
                    <th>Custom Suggestion</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {results.entries.map((entry) => (
                    <tr key={entry.id}>
                      <td>{entry.name}</td>
                      <td>
                        <div className="selection-tags">
                          {entry.selections.map((sel) => (
                            <span key={sel} className="tag">{sel}</span>
                          ))}
                        </div>
                      </td>
                      <td>{entry.customSuggestion || '—'}</td>
                      <td>{new Date(entry.timestamp).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminTab;
