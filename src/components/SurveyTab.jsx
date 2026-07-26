import { useState } from 'react';
import './SurveyTab.css';

const USE_CASES = [
  'Code generation / programming assistance',
  'Writing & content creation',
  'Research & information gathering',
  'Data analysis',
  'Image generation',
  'Learning & education',
  'Email & communication drafting',
  'Translation',
  'Brainstorming & ideation',
  'Task automation / workflow optimization',
];

const API_URL = '/api';

function SurveyTab() {
  const [name, setName] = useState('');
  const [selections, setSelections] = useState([]);
  const [customSuggestion, setCustomSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (useCase) => {
    setSelections((prev) => {
      if (prev.includes(useCase)) {
        return prev.filter((item) => item !== useCase);
      }
      if (prev.length >= 3) {
        setError('You can select up to 3 options only.');
        return prev;
      }
      setError('');
      return [...prev, useCase];
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (selections.length === 0) {
      setError('Please select at least one use case.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, selections, customSuggestion }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit feedback');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setSelections([]);
    setCustomSuggestion('');
    setSubmitted(false);
    setError('');
  };

  if (submitted) {
    return (
      <div className="survey-container">
        <div className="success-card">
          <div className="success-icon">✅</div>
          <h2>Thank you, {name}!</h2>
          <p>Your feedback has been submitted successfully.</p>
          <button className="btn btn-primary" onClick={handleReset}>
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="survey-container">
      <div className="survey-card">
        <h2>What do you mostly use AI tools for?</h2>
        <p className="survey-description">
          Select up to <strong>3</strong> options that best describe your AI usage.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="form-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Use Cases <span className="selection-count">({selections.length}/3 selected)</span>
            </label>
            <div className="checkbox-grid">
              {USE_CASES.map((useCase) => (
                <label
                  key={useCase}
                  className={`checkbox-card ${selections.includes(useCase) ? 'selected' : ''} ${
                    selections.length >= 3 && !selections.includes(useCase) ? 'disabled' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selections.includes(useCase)}
                    onChange={() => handleCheckboxChange(useCase)}
                    disabled={selections.length >= 3 && !selections.includes(useCase)}
                  />
                  <span className="checkbox-text">{useCase}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="custom" className="form-label">
              Other / Your Suggestion <span className="optional">(optional)</span>
            </label>
            <textarea
              id="custom"
              className="form-textarea"
              placeholder="Have a use case not listed above? Share it here..."
              value={customSuggestion}
              onChange={(e) => setCustomSuggestion(e.target.value)}
              rows={3}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SurveyTab;
