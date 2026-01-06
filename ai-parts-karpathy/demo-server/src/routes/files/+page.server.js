import { listDirectory, getNotesDir } from '$lib/markdown.js';

export function load() {
  const files = listDirectory(getNotesDir());

  return { files };
}
