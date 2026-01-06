import { renderMarkdownFile } from '$lib/markdown.js';

export function load() {
  const specFiles = [
    { path: 'karpathy-new-layer.md', desc: 'Complete document (prompt + timeline + examples)' },
    { path: 'CLAUDE.md', desc: 'Project context for Claude Code' },
    { path: '.claude/skills/start-demo-server.md', desc: 'Skill definition example' },
    { path: '.claude/hooks.md', desc: 'Hooks configuration example' },
  ];

  const specs = specFiles.map(spec => {
    const result = renderMarkdownFile(spec.path);
    return {
      path: spec.path,
      desc: spec.desc,
      html: result.html,
      size: result.size
    };
  });

  return { specs };
}
