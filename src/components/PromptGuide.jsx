import './PromptGuide.css';

function PromptGuide() {
  return (
    <div className="guide-container">
      <div className="guide-card">
        <div className="guide-hero">
          <h2>✨ The Perfect Prompt Architecture</h2>
          <p className="guide-intro">
            Think of building a prompt like giving instructions to a brilliant assistant who has no
            context about your life. To get a great output, you need a strong framework.
          </p>
        </div>

        <div className="formula-box">
          <span className="formula-label">A high-performing prompt consists of:</span>
          <div className="formula">
            <span className="formula-part role">[ROLE]</span>
            <span className="formula-plus">+</span>
            <span className="formula-part context">[CONTEXT]</span>
            <span className="formula-plus">+</span>
            <span className="formula-part task">[TASK]</span>
            <span className="formula-plus">+</span>
            <span className="formula-part constraints">[CONSTRAINTS]</span>
            <span className="formula-plus">+</span>
            <span className="formula-part format">[FORMAT]</span>
          </div>
        </div>

        {/* Component 1: Persona */}
        <section className="guide-section">
          <div className="section-header">
            <span className="section-number">1</span>
            <div>
              <h3>Persona (Role)</h3>
              <p className="section-what">Assign the AI a specific identity or level of expertise.</p>
            </div>
          </div>
          <p className="section-why">
            <strong>Why it matters:</strong> It instantly shifts the tone, vocabulary, and depth of
            the response.
          </p>
          <div className="example-box">
            <span className="example-label">💡 Example</span>
            <p>"Act as a Senior UX Researcher with 10 years of experience..."</p>
          </div>
        </section>

        {/* Component 2: Context */}
        <section className="guide-section">
          <div className="section-header">
            <span className="section-number">2</span>
            <div>
              <h3>Context (Background)</h3>
              <p className="section-what">
                Give the background information needed to understand the situation.
              </p>
            </div>
          </div>
          <p className="section-why">
            <strong>Why it matters:</strong> Prevents generic, high-level answers.
          </p>
          <div className="example-box">
            <span className="example-label">💡 Example</span>
            <p>
              "We are launching a mobile app aimed at college students who struggle with
              budgeting..."
            </p>
          </div>
        </section>

        {/* Component 3: Task */}
        <section className="guide-section">
          <div className="section-header">
            <span className="section-number">3</span>
            <div>
              <h3>Task (Action)</h3>
              <p className="section-what">
                Clearly state what you want the AI to do. Use strong action verbs.
              </p>
            </div>
          </div>
          <p className="section-why">
            <strong>Why it matters:</strong> Keeps the model focused on the primary objective.
          </p>
          <div className="example-box">
            <span className="example-label">💡 Example</span>
            <p>
              "Draft a list of 5 user onboarding questions to identify their financial goals..."
            </p>
          </div>
        </section>

        {/* Component 4: Constraints */}
        <section className="guide-section">
          <div className="section-header">
            <span className="section-number">4</span>
            <div>
              <h3>Constraints (Boundaries)</h3>
              <p className="section-what">
                Define what to do and — more importantly — what <em>not</em> to do.
              </p>
            </div>
          </div>
          <p className="section-why">
            <strong>Why it matters:</strong> Saves you from getting walls of text or overly formal
            jargon.
          </p>
          <div className="example-box">
            <span className="example-label">💡 Example</span>
            <p>
              "Keep each question under 15 words. Avoid corporate jargon and keep the tone
              conversational."
            </p>
          </div>
        </section>

        {/* Component 5: Format */}
        <section className="guide-section">
          <div className="section-header">
            <span className="section-number">5</span>
            <div>
              <h3>Format &amp; Examples (Output Style)</h3>
              <p className="section-what">
                Specify how the answer should look (e.g., bullet points, table, JSON).
              </p>
            </div>
          </div>
          <p className="section-why">
            <strong>Why it matters:</strong> Eliminates the need for reformatting.
          </p>
          <div className="example-box">
            <span className="example-label">💡 Example</span>
            <p>
              "Format the output as a Markdown table with three columns: Question, Purpose, and
              Target Metric."
            </p>
          </div>
        </section>

        {/* Golden Rules */}
        <div className="rules-divider">
          <h2>🏆 5 Golden Rules of Prompt Engineering</h2>
        </div>

        <section className="rule-card">
          <div className="rule-header">
            <span className="rule-badge">Rule 1</span>
            <h3>Be Direct, Not Polite</h3>
          </div>
          <p>
            AI doesn't require pleasantries. Saying "Please kindly help me if you don't mind" adds
            unnecessary tokens that can dilute your core message. State what you need directly.
          </p>
        </section>

        <section className="rule-card">
          <div className="rule-header">
            <span className="rule-badge">Rule 2</span>
            <h3>Show, Don't Just Tell (Few-Shot Prompting)</h3>
          </div>
          <p>
            Providing 1 or 2 examples of ideal outputs yields significantly better results than
            describing what you want in paragraph form.
          </p>
          <div className="comparison">
            <div className="comparison-bad">
              <span className="comparison-label">❌ Bad</span>
              <p>"Write three catchy titles for my article."</p>
            </div>
            <div className="comparison-good">
              <span className="comparison-label">✅ Good</span>
              <p>
                "Write three catchy titles for my article. Here are two examples of the style I
                like:
              </p>
              <ul>
                <li>10 Small Habits That Secretly Waste Your Time</li>
                <li>Why Your Daily To-Do List Is Failing You"</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rule-card">
          <div className="rule-header">
            <span className="rule-badge">Rule 3</span>
            <h3>Use Positive Instructions</h3>
          </div>
          <p>
            Models respond better when told what to do rather than what not to do.
          </p>
          <div className="comparison">
            <div className="comparison-bad">
              <span className="comparison-label">❌ Instead of</span>
              <p>"Don't write a long introduction."</p>
            </div>
            <div className="comparison-good">
              <span className="comparison-label">✅ Use</span>
              <p>"Start directly with the first main point."</p>
            </div>
          </div>
        </section>

        <section className="rule-card">
          <div className="rule-header">
            <span className="rule-badge">Rule 4</span>
            <h3>Ask AI to "Think Step-by-Step"</h3>
          </div>
          <p>
            When dealing with complex logic, math, or reasoning tasks, instruct the model to show
            its thought process first (known as Chain-of-Thought prompting).
          </p>
          <div className="example-box">
            <span className="example-label">💡 Example</span>
            <p>
              "Analyze this market strategy. Think step-by-step, listing pros and cons for each
              phase before providing your final recommendation."
            </p>
          </div>
        </section>

        <section className="rule-card">
          <div className="rule-header">
            <span className="rule-badge">Rule 5</span>
            <h3>Treat It as an Iterative Process</h3>
          </div>
          <p>Rarely will a first prompt yield perfection. Treat prompt writing as a conversation:</p>
          <ol className="iteration-steps">
            <li>
              <strong>Run</strong> your initial prompt.
            </li>
            <li>
              <strong>Review</strong> the output.
            </li>
            <li>
              <strong>Refine</strong> by adding constraints{' '}
              <span className="refinement-example">
                ("Great, now shorten section 2 and add a bolder summary at the top")
              </span>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default PromptGuide;
