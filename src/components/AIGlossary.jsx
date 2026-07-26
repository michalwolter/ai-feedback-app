import { useState } from 'react';
import './AIGlossary.css';

const GLOSSARY_DATA = [
  {
    category: 'Retrieval, Data & Architecture',
    icon: '🏗️',
    terms: [
      {
        term: 'RAG',
        fullName: 'Retrieval-Augmented Generation',
        definition:
          'A technique that enhances Large Language Models by connecting them to external databases or document repositories. Instead of relying solely on pre-trained knowledge, RAG fetches relevant private or up-to-date facts before generating a response.',
        note: 'Used in enterprise chatbots to answer questions based on internal company PDFs without re-training the model.',
        noteLabel: 'Context',
      },
      {
        term: 'Vector Database',
        definition:
          'A specialized database designed to store and query high-dimensional vector embeddings. It allows lightning-fast similarity searches based on semantic meaning rather than exact keyword matches.',
        note: 'Pinecone, Weaviate, Qdrant, Milvus, pgvector.',
        noteLabel: 'Key Tools',
      },
      {
        term: 'Vector Embedding',
        definition:
          'A numerical representation of text, images, or audio as arrays of numbers (vectors) in a multi-dimensional space. Words or sentences with similar meanings are positioned close to each other.',
        note: '"King - Man + Woman" mathematically points closely to "Queen" in vector space.',
        noteLabel: 'Example',
      },
      {
        term: 'LLM',
        fullName: 'Large Language Model',
        definition:
          'A type of artificial intelligence model trained on massive datasets of text to understand, generate, and reason about human language. LLMs use deep neural networks with billions of parameters to predict the most likely next token in a sequence, enabling capabilities like conversation, summarization, translation, and code generation. Examples include GPT-4, Claude, Gemini, and LLaMA.',
      },
      {
        term: 'Transformer Architecture',
        definition:
          'The groundbreaking deep learning neural network architecture introduced in 2017 (via the paper "Attention Is All You Need") that powers modern LLMs through parallelized self-attention mechanisms.',
      },
      {
        term: 'MoE',
        fullName: 'Mixture of Experts',
        definition:
          'A machine learning technique where multiple specialized sub-networks ("experts") handle different parts of the input data, with a gating network deciding which expert to activate per token, lowering computational costs.',
      },
    ],
  },
  {
    category: 'Prompt Engineering & Inference Controls',
    icon: '🎯',
    terms: [
      {
        term: 'Prompt',
        definition:
          'The textual or multimodal input provided to an AI model to guide its output. A prompt sets the task, tone, role, constraints, and context for generation.',
      },
      {
        term: 'Prompt Engineering',
        definition:
          'The practice and discipline of designing, structuring, and optimizing prompts to programmatically elicit accurate, consistent, and safe outputs from generative AI models.',
      },
      {
        term: 'Context Window',
        definition:
          'The maximum amount of information (measured in tokens) that an AI model can process and hold in memory during a single conversation or inference request.',
        note: 'A 128k token context window allows an AI to read an entire book in a single prompt.',
        noteLabel: 'Impact',
      },
      {
        term: 'Token',
        definition:
          'The basic unit of text processed by an LLM. A token can be a word, part of a word, or punctuation. On average, 1,000 tokens equal roughly 750 English words.',
      },
      {
        term: 'Temperature',
        definition:
          'A hyperparameter that controls the randomness and creativity of an AI\'s output. Lower temperatures (e.g., 0.1) produce deterministic and focused responses, while higher temperatures (e.g., 0.8) yield creative and diverse outputs.',
      },
      {
        term: 'Zero-Shot / Few-Shot Learning',
        definition:
          'Zero-Shot: Asking the AI to perform a task without giving explicit examples. Few-Shot: Providing a few sample input-output pairs inside the prompt to guide output structure and style.',
      },
      {
        term: 'AI Guardrails',
        definition:
          'Safety protocols, rules, and moderation layers wrapped around an AI system to ensure outputs remain compliant, accurate, secure, and non-toxic.',
      },
    ],
  },
  {
    category: 'Software Development & Operations',
    icon: '⚙️',
    terms: [
      {
        term: 'AI-Driven Development',
        definition:
          'A software engineering paradigm where AI assistants (e.g., GitHub Copilot, Cursor) are deeply embedded into the coding lifecycle, assisting in code generation, refactoring, testing, and debugging.',
      },
      {
        term: 'MLOps',
        fullName: 'Machine Learning Operations',
        definition:
          'A set of practices that combines Machine Learning, DevOps, and Data Engineering to deploy, monitor, automate, and maintain ML models in production reliably and efficiently.',
      },
      {
        term: 'Agentic AI / AI Agent',
        definition:
          'An autonomous AI system that can reason, break down complex goals into smaller steps, execute commands using external tools/APIs, and self-correct to complete tasks with minimal human intervention.',
      },
      {
        term: 'Inference',
        definition:
          'The operational phase where a trained AI model processes new, unseen user input to generate predictions or outputs in real time.',
      },
      {
        term: 'Fine-Tuning',
        definition:
          'The process of taking a pre-trained base model and further training it on a smaller, domain-specific dataset to adapt its style, behavior, or domain knowledge.',
      },
      {
        term: 'Quantization',
        definition:
          'A model optimization technique that compresses deep learning models by lowering the precision of their weights (e.g., from 16-bit floats to 4-bit integers), allowing them to run on hardware with less memory.',
      },
    ],
  },
  {
    category: 'Model Reliability, Safety & Evaluation',
    icon: '🛡️',
    terms: [
      {
        term: 'Hallucination',
        definition:
          'A phenomenon where a generative AI model confidently outputs false, fabricated, or factually incorrect information presented as absolute truth.',
      },
      {
        term: 'AI Alignment',
        definition:
          'The research area focused on ensuring that AI systems act in accordance with human values, safety criteria, ethical standards, and user intentions.',
      },
      {
        term: 'Perplexity',
        definition:
          'A mathematical metric used to evaluate language models. It measures how well a probability model predicts a sample text. Lower perplexity indicates higher model confidence and accuracy.',
      },
      {
        term: 'Overfitting',
        definition:
          'A training flaw where a machine learning model memorizes its training data too closely, performing exceptionally on training data but failing on new, unseen input.',
      },
    ],
  },
  {
    category: 'Training Paradigms & Generative Models',
    icon: '🧠',
    terms: [
      {
        term: 'Supervised Learning',
        definition:
          'A foundational machine learning approach where a model is trained on labeled data (input paired with the correct output) to learn classification or regression tasks.',
      },
      {
        term: 'Unsupervised Learning',
        definition:
          'Training an AI model on unlabeled data, allowing the algorithm to discover hidden patterns, clusters, or structures on its own.',
      },
      {
        term: 'RLHF',
        fullName: 'Reinforcement Learning from Human Feedback',
        definition:
          'A fine-tuning method where human evaluations and rankings are used to train a reward model, which then optimizes the AI model to produce safer, more helpful responses.',
      },
      {
        term: 'Multimodal AI',
        definition:
          'An AI system capable of processing and understanding multiple types of input modalities simultaneously, such as text, images, video, and audio.',
      },
      {
        term: 'Diffusion Model',
        definition:
          'A class of generative models primarily used for image generation (e.g., Midjourney, Stable Diffusion) that learn to generate data by gradually removing noise from a completely random image signal.',
      },
      {
        term: 'Latent Space',
        definition:
          'A lower-dimensional vector space in which a neural network maps complex input data (like images or sentences) to uncover intrinsic features and abstract relationships.',
      },
    ],
  },
];

function AIGlossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedCategories, setCollapsedCategories] = useState(new Set());

  const filteredData = GLOSSARY_DATA.map((category) => ({
    ...category,
    terms: category.terms.filter(
      (t) =>
        t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.fullName && t.fullName.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  })).filter((category) => category.terms.length > 0);

  const totalTerms = GLOSSARY_DATA.reduce((sum, cat) => sum + cat.terms.length, 0);

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
    <div className="glossary-container">
      <div className="glossary-card">
        <div className="glossary-hero">
          <h2>📖 AI Glossary</h2>
          <p className="glossary-subtitle">
            A comprehensive handbook of <strong>{totalTerms} essential terms</strong>, architectures,
            and methodologies shaping modern AI &amp; Generative Systems.
          </p>
        </div>

        <div className="glossary-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="form-input search-input"
            placeholder="Search terms, definitions..."
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
          <div className="glossary-empty">
            <p>No terms found matching "{searchQuery}"</p>
          </div>
        ) : (
          filteredData.map((category, catIndex) => {
            const isExpanded = !collapsedCategories.has(catIndex) || searchQuery.length > 0;
            return (
              <div key={category.category} className="glossary-category">
                <button
                  className={`category-header ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleCategory(catIndex)}
                >
                  <div className="category-title">
                    <span className="category-icon">{category.icon}</span>
                    <h3>{category.category}</h3>
                    <span className="category-count">{category.terms.length} terms</span>
                  </div>
                  <span className={`category-chevron ${isExpanded ? 'open' : ''}`}>▼</span>
                </button>

                {isExpanded && (
                  <div className="category-terms">
                    {category.terms.map((item) => (
                      <div key={item.term} className="term-card">
                        <div className="term-header">
                          <h4 className="term-name">{item.term}</h4>
                          {item.fullName && (
                            <span className="term-fullname">{item.fullName}</span>
                          )}
                        </div>
                        <p className="term-definition">{item.definition}</p>
                        {item.note && (
                          <div className="term-note">
                            <span className="note-label">{item.noteLabel}:</span> {item.note}
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

export default AIGlossary;
