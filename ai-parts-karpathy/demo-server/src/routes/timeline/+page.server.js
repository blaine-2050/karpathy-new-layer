import { renderMarkdownFile } from '$lib/markdown.js';

export function load() {
  const result = renderMarkdownFile('karpathy-new-layer.md');

  return {
    html: result.html,
    size: result.size,
    modified: result.modified
  };
}
