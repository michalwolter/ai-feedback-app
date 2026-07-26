import { useState } from 'react';
import HomePage from './components/HomePage';
import AIGlossary from './components/AIGlossary';
import AITools from './components/AITools';
import PromptGuide from './components/PromptGuide';
import SurveyTab from './components/SurveyTab';
import AdminTab from './components/AdminTab';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app">
      <header className="app-header" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
        <h1>🤖 AI Development — First Steps</h1>
        <p className="subtitle">Your structured roadmap to AI-driven development</p>
      </header>

      <nav className="tab-nav">
        <button
          className={`tab-btn ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          🏠 Home
        </button>
        <button
          className={`tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
          onClick={() => setActiveTab('glossary')}
        >
          📖 AI Glossary
        </button>
        <button
          className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          🛠️ AI Tools
        </button>
        <button
          className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
          onClick={() => setActiveTab('guide')}
        >
          ✍️ Prompt Guide
        </button>
        <button
          className={`tab-btn ${activeTab === 'survey' ? 'active' : ''}`}
          onClick={() => setActiveTab('survey')}
        >
          📝 Survey
        </button>
        <button
          className={`tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
          onClick={() => setActiveTab('admin')}
        >
          📊 Admin
        </button>
      </nav>

      <main className="tab-content">
        {activeTab === 'home' && <HomePage onNavigate={setActiveTab} />}
        {activeTab === 'glossary' && <AIGlossary />}
        {activeTab === 'tools' && <AITools />}
        {activeTab === 'guide' && <PromptGuide />}
        {activeTab === 'survey' && <SurveyTab />}
        {activeTab === 'admin' && <AdminTab />}
      </main>
    </div>
  );
}

export default App;
