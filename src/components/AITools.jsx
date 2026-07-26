import { useState } from 'react';
import './AITools.css';

const TOOLS_DATA = [
  {
    category: 'Conversational & Research Assistants',
    icon: '💬',
    tools: [
      {
        name: 'ChatGPT',
        maker: 'OpenAI',
        strengths: 'Versatile, strong ecosystem, multimodal, custom GPTs',
        bestFor:
          'General problem solving, writing, data analysis, quick ideation',
      },
      {
        name: 'Claude',
        maker: 'Anthropic',
        strengths: 'High-precision reasoning, natural tone, large context window',
        bestFor:
          'Document analysis, long-form content, technical reasoning',
      },
      {
        name: 'Gemini',
        maker: 'Google',
        strengths: 'Google Workspace integration, live web search',
        bestFor:
          'Grounded web research, Google Docs/Drive workflow, visual tasks',
      },
      {
        name: 'Perplexity AI',
        maker: '',
        strengths: 'Live web citation engine, structured answer synthesis',
        bestFor:
          'Fact-based web research, academic deep-dives, finding sources',
      },
    ],
  },
  {
    category: 'AI-Driven Coding & Development Environments',
    icon: '👨‍💻',
    tools: [
      {
        name: 'Cursor',
        tag: 'AI-First Code Editor',
        description:
          'An enhanced fork of VS Code providing deep codebase indexing, multi-file editing, terminal integration, and inline AI commands (Cmd+K).',
      },
      {
        name: 'Claude Code',
        tag: 'Agentic Terminal CLI',
        description:
          'An agentic command-line interface tool by Anthropic operating inside your terminal to autonomously run shell commands, execute tests, and modify codebases.',
      },
      {
        name: 'GitHub Copilot',
        tag: 'IDE Extension',
        description:
          'The industry-standard coding assistant offering real-time code completion, chat, and automated pull-request summaries across VS Code and JetBrains.',
      },
      {
        name: 'Cline',
        tag: 'Open-Source VS Code Agent',
        description:
          'An autonomous coding agent extension capable of using local CLI tools, writing code, and executing browser steps under human approval.',
      },
    ],
  },
  {
    category: 'Methods & Frameworks',
    icon: '🧩',
    tools: [
      {
        name: 'BMAD AI',
        tag: 'Breakthrough Method for Agile AI-Driven Development',
        description:
          'An agile framework designed specifically for AI-driven software development. BMAD structures the interaction between human developers and autonomous AI agents, standardizing workflows for iterative prompting, multi-agent code orchestration, safety evaluations, and rapid feature prototyping.',
      },
      {
        name: 'LangChain & LlamaIndex',
        tag: 'Orchestration & Data Frameworks',
        description:
          'LangChain: Popular software framework for building applications powered by LLMs through composable chains and agent workflows. LlamaIndex: Specialized data framework optimized for indexing and retrieving unstructured data in RAG pipelines.',
      },
      {
        name: 'AutoGen & CrewAI',
        tag: 'Multi-Agent Systems',
        description:
          'Frameworks designed to orchestrate team-like networks of autonomous AI agents that collaborate, assign roles, and solve complex multi-step engineering tasks together.',
      },
    ],
  },
  {
    category: 'Top AI Foundation Models',
    icon: '🧠',
    tools: [
      {
        name: 'OpenAI Models',
        tag: 'GPT-4o, o1, o3',
        description:
          'GPT-4o: Flagship fast multimodal model for general tasks. o1 / o3 Series: Specialized reasoning models utilizing internal chain-of-thought for complex math, science, and coding tasks.',
      },
      {
        name: 'Anthropic Models',
        tag: 'Claude Sonnet, Opus, Haiku',
        description:
          'Sonnet: Optimal balance of speed and deep coding intelligence. Opus: High-stakes complex reasoning and architectural refactoring. Haiku: Ultra-fast, lightweight model for high-throughput API tasks.',
      },
      {
        name: 'Google Models',
        tag: 'Gemini Pro, Flash',
        description:
          'Pro: High-capacity reasoning engine with massive context windows. Flash: Lightweight, ultra-fast inference designed for low-latency user interactions.',
      },
    ],
  },
  {
    category: 'Creative & Multimodal AI Tools',
    icon: '🎨',
    tools: [
      {
        name: 'Image Generation',
        tag: 'Midjourney, FLUX, Stable Diffusion, DALL-E 3',
        description:
          'Leading visual tools offering photorealistic rendering, fine-grained open-source weights (FLUX/SD), and conversational prompt generation (DALL-E 3).',
      },
      {
        name: 'Video Generation',
        tag: 'Sora, Runway Gen-3, Luma Dream Machine',
        description:
          'State-of-the-art text-to-video models capable of generating cinematic clips, animating static images, and handling complex camera motions.',
      },
      {
        name: 'Audio & Voice Synthesis',
        tag: 'ElevenLabs, Suno, Udio',
        description:
          'Industry-standard tools for realistic text-to-speech, custom voice cloning, multi-language dubbing, and full musical composition generation.',
      },
    ],
  },
];

function AITools() {
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedCategories, setCollapsedCategories] = useState(new Set());

  const filteredData = TOOLS_DATA.map((category) => ({
    ...category,
    tools: category.tools.filter((t) => {
      const q = searchQuery.toLowerCase();
      return (
        t.name.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q)) ||
        (t.tag && t.tag.toLowerCase().includes(q)) ||
        (t.strengths && t.strengths.toLowerCase().includes(q)) ||
        (t.bestFor && t.bestFor.toLowerCase().includes(q))
      );
    }),
  })).filter((category) => category.tools.length > 0);

  const totalTools = TOOLS_DATA.reduce((sum, cat) => sum + cat.tools.length, 0);

  const toggleCategory = (index) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="tools-container">
      <div className="tools-card">
        <div className="tools-hero">
          <h2>🛠️ AI Tools & Frameworks</h2>
          <p className="tools-subtitle">
            A comprehensive overview of <strong>{totalTools} tools</strong> across conversational
            assistants, coding environments, frameworks, foundation models, and creative platforms.
          </p>
        </div>

        <div className="tools-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="form-input search-input"
            placeholder="Search tools, frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>
              ✕
            </button>
          )}
        </div>

        {filteredData.length === 0 ? (
          <div className="tools-empty">
            <p>No tools found matching "{searchQuery}"</p>
          </div>
        ) : (
          filteredData.map((category, catIndex) => {
            const isExpanded = !collapsedCategories.has(catIndex) || searchQuery.length > 0;
            return (
              <div key={category.category} className="tools-category">
                <button
                  className={`category-header ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleCategory(catIndex)}
                >
                  <div className="category-title">
                    <span className="category-icon">{category.icon}</span>
                    <h3>{category.category}</h3>
                    <span className="category-count">{category.tools.length} tools</span>
                  </div>
                  <span className={`category-chevron ${isExpanded ? 'open' : ''}`}>▼</span>
                </button>

                {isExpanded && (
                  <div className="category-tools">
                    {category.tools.map((item) => (
                      <div key={item.name} className="tool-card">
                        <div className="tool-header">
                          <h4 className="tool-name">{item.name}</h4>
                          {item.tag && <span className="tool-tag">{item.tag}</span>}
                          {item.maker && <span className="tool-maker">{item.maker}</span>}
                        </div>
                        {item.description && (
                          <p className="tool-description">{item.description}</p>
                        )}
                        {item.strengths && (
                          <div className="tool-meta">
                            <div className="tool-meta-item">
                              <span className="meta-label">💪 Strengths:</span>
                              <span className="meta-value">{item.strengths}</span>
                            </div>
                            <div className="tool-meta-item">
                              <span className="meta-label">🎯 Best for:</span>
                              <span className="meta-value">{item.bestFor}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default AITools;
