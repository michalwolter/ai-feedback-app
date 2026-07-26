import { useState } from 'react';
import SurveyTab from './components/SurveyTab';
import AdminTab from './components/AdminTab';
import PromptGuide from './components/PromptGuide';
import AIGlossary from './components/AIGlossary';
import AITools from './components/AITools';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('survey');

  return (
    <div className="app">
      <header className="app-header">
        <h1>🤖 AI Tools Feedback</h1>
        <p className="subtitle">Share how you use AI in your daily life</p>
      </header>

      <nav className="tab-nav">
        <button
          className={`tab-btn ${activeTab === 'survey' ? 'active' : ''}`}
          onClick={() => setActiveTab('survey')}
        >
          📝 Survey
        </button>
        <button
          className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
          onClick={() => setActiveTab('guide')}
        >
          🎯 Prompt Guide
        </button>
        <button
          className={`tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
          onClick={() => setActiveTab('glossary')}
        >
          📖 Glossary
        </button>
        <button
          className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          🛠️ Tools
        </button>
        <button
          className={`tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
          onClick={() => setActiveTab('admin')}
        >
          📊 Admin
        </button>
      </nav>

      <main className="tab-content">
        {activeTab === 'survey' && <SurveyTab />}
        {activeTab === 'guide' && <PromptGuide />}
        {activeTab === 'glossary' && <AIGlossary />}
        {activeTab === 'tools' && <AITools />}
        {activeTab === 'admin' && <AdminTab />}
      </main>
    </div>
  );
}

export default App;
