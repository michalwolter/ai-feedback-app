import './HomePage.css';

function HomePage({ onNavigate }) {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-particles">
          <span className="particle particle-1"></span>
          <span className="particle particle-2"></span>
          <span className="particle particle-3"></span>
          <span className="particle particle-4"></span>
          <span className="particle particle-5"></span>
        </div>
        <div className="hero-badge">🚀 Your AI Journey Starts Here</div>
        <h2>Welcome to <span className="gradient-text">AI Development</span> — First Steps</h2>
        <p className="hero-lead">
          A structured roadmap to help you build a solid foundation in AI-driven development,
          strip away the hype, and master the practical skills needed today.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Learning Paths</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Key Terms</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="home-section industry-section">
        <div className="section-icon-wrapper">
          <span className="section-icon">⚡</span>
        </div>
        <h3>How AI Has Transformed the Industry</h3>
        <p>
          Artificial Intelligence is no longer just a trend or a collection of simple chatbots — it
          has fundamentally altered the entire software landscape. A vast majority of software
          developers now integrate AI directly into their daily workflows, shifting the standard
          engineering paradigm.
        </p>
        <p>
          From writing complex code snippets and generating unit tests to managing automated
          deployments and designing architecture, AI has evolved from a basic assistant into an{' '}
          <strong>essential co-pilot</strong>. Modern software development is less about manually
          typing syntax and more about guiding, directing, and orchestrating intelligent systems.
        </p>
        <p>
          However, navigating this landscape can feel overwhelming. With hundreds of new frameworks,
          concepts, and techniques emerging rapidly, knowing where to start is the biggest challenge.
        </p>
        <div className="home-callout">
          <div className="callout-icon">💡</div>
          <div className="callout-content">
            That's where this site comes in. We provide a structured roadmap to help you build a solid
            foundation in AI-driven development, strip away the hype, and master the practical skills
            needed today.
          </div>
        </div>
      </section>

      {/* What This Site Offers */}
      <section className="home-section offers-section">
        <div className="section-icon-wrapper">
          <span className="section-icon">📚</span>
        </div>
        <h3>What This Site Offers</h3>
        <p className="offers-intro">
          We have organized essential knowledge into four clear, actionable resources designed to
          accelerate your learning curve:
        </p>

        <div className="resource-grid">
          <div className="resource-card card-glossary" onClick={() => onNavigate('glossary')}>
            <div className="card-glow"></div>
            <div className="resource-header">
              <div className="resource-icon">📖</div>
              <div className="resource-number">1</div>
            </div>
            <h4>AI Glossary</h4>
            <ul>
              <li>
                <strong>Master the Vocabulary:</strong> Dive into a curated list of key terms and
                acronyms (like RAG, Vector Databases, MLOps, and Agentic AI).
              </li>
              <li>
                <strong>Build Foundation:</strong> Get straight-to-the-point definitions and
                practical examples so you can read technical documentation and discuss architecture
                with confidence.
              </li>
            </ul>
            <span className="resource-cta">Explore Glossary <span className="cta-arrow">→</span></span>
          </div>

          <div className="resource-card card-tools" onClick={() => onNavigate('tools')}>
            <div className="card-glow"></div>
            <div className="resource-header">
              <div className="resource-icon">🛠️</div>
              <div className="resource-number">2</div>
            </div>
            <h4>Essential AI Tools</h4>
            <ul>
              <li>
                <strong>Explore the Ecosystem:</strong> Discover the leading AI-powered IDEs, coding
                assistants, model providers, and developer frameworks driving modern software
                engineering.
              </li>
              <li>
                <strong>Streamline Your Workflow:</strong> Learn which tools best fit your tech
                stack — from automated code generation and refactoring to vector search and model
                monitoring.
              </li>
            </ul>
            <span className="resource-cta">Explore Tools <span className="cta-arrow">→</span></span>
          </div>

          <div className="resource-card card-guide" onClick={() => onNavigate('guide')}>
            <div className="card-glow"></div>
            <div className="resource-header">
              <div className="resource-icon">✍️</div>
              <div className="resource-number">3</div>
            </div>
            <h4>Prompt Engineering Guide</h4>
            <ul>
              <li>
                <strong>Write Powerful Prompts:</strong> Learn how to communicate effectively with
                Large Language Models.
              </li>
              <li>
                <strong>Proven Frameworks:</strong> Discover actionable prompt architectures
                (Persona, Context, Task, Constraints) and key techniques like Chain-of-Thought and
                Few-Shot Prompting to consistently generate accurate code and content.
              </li>
            </ul>
            <span className="resource-cta">Explore Guide <span className="cta-arrow">→</span></span>
          </div>

          <div className="resource-card card-survey" onClick={() => onNavigate('survey')}>
            <div className="card-glow"></div>
            <div className="resource-header">
              <div className="resource-icon">📝</div>
              <div className="resource-number">4</div>
            </div>
            <h4>AI Usage Survey</h4>
            <ul>
              <li>
                <strong>Share Your Workflow:</strong> Tell us about your top 3 ways of using AI in
                your daily routine or projects.
              </li>
              <li>
                <strong>Help Us Build:</strong> Your feedback directly guides our future updates,
                tutorials, and deep-dive guides so we can build the exact resources you need.
              </li>
            </ul>
            <span className="resource-cta">Take Survey <span className="cta-arrow">→</span></span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="cta-decoration">
          <span className="cta-ring cta-ring-1"></span>
          <span className="cta-ring cta-ring-2"></span>
        </div>
        <h3>🎯 Ready to Begin?</h3>
        <p>
          Start by exploring the <strong>AI Glossary</strong> to lock in your foundational terms,
          check out the <strong>Tools</strong> section to upgrade your tech stack, or jump straight
          to the <strong>Prompt Guide</strong> to start building smarter queries right away!
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary btn-glow" onClick={() => onNavigate('glossary')}>
            📖 Start with Glossary
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('tools')}>
            🛠️ Explore Tools
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('guide')}>
            ✍️ Prompt Guide
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
