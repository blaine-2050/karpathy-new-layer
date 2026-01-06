import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

// Parent directory containing markdown files
const NOTES_DIR = path.join(process.cwd(), '..');

/**
 * Read and render a markdown file to HTML
 * @param {string} relativePath - Path relative to notes directory
 * @returns {{ html: string, size: string, modified: string }}
 */
export function renderMarkdownFile(relativePath) {
  const fullPath = path.join(NOTES_DIR, relativePath);

  try {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const stats = fs.statSync(fullPath);

    return {
      html: marked(content),
      size: (stats.size / 1024).toFixed(1) + ' KB',
      modified: stats.mtime.toLocaleDateString()
    };
  } catch (err) {
    return {
      html: `<p class="text-red-600">Error reading file: ${err.message}</p>`,
      size: '?',
      modified: '?'
    };
  }
}

/**
 * List directory contents recursively
 * @param {string} dir - Directory path
 * @returns {Array<{name: string, isDir: boolean, size?: string, children?: Array}>}
 */
export function listDirectory(dir = NOTES_DIR) {
  const results = [];

  try {
    const items = fs.readdirSync(dir).sort();

    for (const item of items) {
      // Skip node_modules and .git
      if (item === 'node_modules' || item === '.git') continue;

      const fullPath = path.join(dir, item);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        results.push({
          name: item,
          isDir: true,
          children: listDirectory(fullPath)
        });
      } else {
        results.push({
          name: item,
          isDir: false,
          size: (stats.size / 1024).toFixed(1) + ' KB'
        });
      }
    }
  } catch (err) {
    // Ignore errors
  }

  return results;
}

/**
 * Get notes directory path
 */
export function getNotesDir() {
  return NOTES_DIR;
}
