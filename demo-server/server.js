const express = require('express');
const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parent directory (notes/)
const NOTES_DIR = path.join(__dirname, '..');

// CSS for readable presentation with typography distinctions
const CSS = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    line-height: 1.6;
    color: #333;
  }
  h1 { border-bottom: 2px solid #333; padding-bottom: 0.5rem; }
  h2 { color: #555; margin-top: 2rem; }

  /* Typewriter font for code blocks (prompts and original markdown) */
  pre {
    background: #fafafa;
    padding: 1.25rem;
    overflow-x: auto;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    font-family: 'Courier New', Courier, 'Liberation Mono', monospace;
    font-size: 0.9em;
    line-height: 1.5;
  }
  code {
    font-family: 'Courier New', Courier, 'Liberation Mono', monospace;
    background: #f0f0f0;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9em;
  }
  pre code { background: none; padding: 0; }

  /* Term entry styling for timeline definitions */
  .term-entry {
    margin: 1.5rem 0;
    padding-left: 0;
  }
  .term-entry > p:first-of-type strong {
    font-size: 1.15em;
    color: #222;
    display: block;
    margin-bottom: 0.25rem;
  }
  .term-entry > p:first-of-type em {
    color: #666;
    font-size: 0.9em;
  }
  .term-entry > p:nth-of-type(2) {
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    color: #444;
  }
  .term-entry > p:nth-of-type(3) {
    margin-left: 1.5rem;
    color: #555;
    font-size: 0.95em;
  }
  .term-entry > p:nth-of-type(3) em {
    font-style: normal;
    color: #666;
  }

  a { color: #0066cc; }
  .file-list { list-style: none; padding: 0; }
  .file-list li {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
  }
  .file-list a { text-decoration: none; }
  .file-list a:hover { text-decoration: underline; }
  .dir { font-weight: bold; }
  .meta { color: #666; font-size: 0.9em; margin-bottom: 2rem; }
  table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
  th, td { border: 1px solid #ddd; padding: 0.5rem; text-align: left; }
  th { background: #f5f5f5; }
  nav { background: #f8f8f8; padding: 1rem; margin-bottom: 2rem; border-radius: 4px; }
  nav a { margin-right: 1rem; }
  .spec-note {
    background: #fffde7;
    border-left: 4px solid #ffc107;
    padding: 1rem;
    margin: 1rem 0;
  }

  /* Blockquotes for Karpathy quote */
  blockquote {
    border-left: 4px solid #666;
    margin: 1.5rem 0;
    padding: 0.5rem 1.5rem;
    background: #f9f9f9;
    font-style: italic;
    color: #444;
  }
`;

// Helper: wrap content in HTML
function htmlPage(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>${CSS}</style>
</head>
<body>
  <nav>
    <a href="/">Home</a>
    <a href="/timeline">Timeline</a>
    <a href="/specs">Specifications</a>
    <a href="/files">All Files</a>
  </nav>
  ${content}
</body>
</html>`;
}

// Helper: read and render markdown
function renderMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return marked(content);
  } catch (err) {
    return `<p>Error reading file: ${err.message}</p>`;
  }
}

// Helper: get file stats
function getFileInfo(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return {
      size: (stats.size / 1024).toFixed(1) + ' KB',
      modified: stats.mtime.toLocaleDateString()
    };
  } catch {
    return { size: '?', modified: '?' };
  }
}

// Home page
app.get('/', (req, res) => {
  const content = `
    <h1>The New Software Layer: A Demo</h1>

    <div class="spec-note">
      <strong>What you're seeing:</strong> This web server was built from English-language
      specifications in Markdown files, demonstrating the "new software layer" that
      Andrej Karpathy described. The AI tools (Claude Code) read the specs and generated
      this server.
    </div>

    <h2>What This Demo Shows</h2>
    <ul>
      <li><strong><a href="/timeline">The Timeline</a></strong> - A guide to AI tools from Nov 2022 to Dec 2025</li>
      <li><strong><a href="/specs">The Specifications</a></strong> - The Markdown files that defined this project</li>
      <li><strong><a href="/files">All Files</a></strong> - Directory listing showing everything in this project</li>
    </ul>

    <h2>The Key Insight</h2>
    <p>
      Traditional software requires precise syntax in programming languages. This project
      demonstrates a different approach: English-language descriptions in Markdown files,
      interpreted by AI tools (Claude Code), producing working software.
    </p>
    <p>
      The specifications you can view at <a href="/specs">/specs</a> are the actual source
      of truth. The AI read them and generated this server. This is what Karpathy means by
      a "new programmable layer."
    </p>

    <h2>Components Used</h2>
    <table>
      <tr><th>Concept</th><th>Example in This Project</th></tr>
      <tr><td>Prompts</td><td>karpathy-new-layer.md - the complete document</td></tr>
      <tr><td>Context</td><td>CLAUDE.md - project guidance for the AI</td></tr>
      <tr><td>Skills</td><td>.claude/skills/start-demo-server.md - reusable command</td></tr>
      <tr><td>Hooks</td><td>.claude/hooks.md - automated actions on events</td></tr>
      <tr><td>Tools</td><td>File reading, code generation, terminal commands</td></tr>
    </table>
  `;
  res.send(htmlPage('New Software Layer Demo', content));
});

// Timeline page
app.get('/timeline', (req, res) => {
  const timelinePath = path.join(NOTES_DIR, 'karpathy-new-layer.md');
  const html = renderMarkdown(timelinePath);
  const info = getFileInfo(timelinePath);

  const content = `
    <div class="meta">
      Source: karpathy-new-layer.md | ${info.size} | Last modified: ${info.modified}
    </div>
    ${html}
  `;
  res.send(htmlPage('Timeline - New Software Layer', content));
});

// Specifications page
app.get('/specs', (req, res) => {
  const specFiles = [
    { path: 'karpathy-new-layer.md', desc: 'Complete document (prompt + timeline + examples)' },
    { path: 'CLAUDE.md', desc: 'Project context for Claude Code' },
    { path: '.claude/skills/start-demo-server.md', desc: 'Skill definition example' },
    { path: '.claude/hooks.md', desc: 'Hooks configuration example' },
  ];

  let content = `
    <h1>Specification Files</h1>
    <div class="spec-note">
      These Markdown files are the "source code" for this project in the new software layer.
      Claude Code read these specifications and generated the working server you're using now.
    </div>
  `;

  for (const spec of specFiles) {
    const fullPath = path.join(NOTES_DIR, spec.path);
    const info = getFileInfo(fullPath);
    const html = renderMarkdown(fullPath);

    content += `
      <h2>${spec.path}</h2>
      <p><em>${spec.desc}</em> | ${info.size}</p>
      <details>
        <summary>View contents</summary>
        ${html}
      </details>
    `;
  }

  res.send(htmlPage('Specifications - New Software Layer', content));
});

// Files listing page
app.get('/files', (req, res) => {
  function listDir(dir, prefix = '') {
    let html = '<ul class="file-list">';
    const items = fs.readdirSync(dir).sort();

    for (const item of items) {
      if (item === 'node_modules' || item === '.git') continue;

      const fullPath = path.join(dir, item);
      const relativePath = path.relative(NOTES_DIR, fullPath);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        html += `<li class="dir">📁 ${item}/`;
        html += listDir(fullPath, prefix + '  ');
        html += '</li>';
      } else {
        const info = getFileInfo(fullPath);
        html += `<li>📄 ${item} <span class="meta">(${info.size})</span></li>`;
      }
    }

    html += '</ul>';
    return html;
  }

  const content = `
    <h1>Project Files</h1>
    <p>Complete directory listing of the notes/ project:</p>
    ${listDir(NOTES_DIR)}
  `;
  res.send(htmlPage('Files - New Software Layer', content));
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║  New Software Layer Demo Server                            ║
║  http://localhost:${PORT}                                      ║
╠════════════════════════════════════════════════════════════╣
║  Routes:                                                   ║
║    /          - Home and overview                          ║
║    /timeline  - The Karpathy timeline document             ║
║    /specs     - Specification files that built this        ║
║    /files     - Directory listing                          ║
╚════════════════════════════════════════════════════════════╝
  `);
});
