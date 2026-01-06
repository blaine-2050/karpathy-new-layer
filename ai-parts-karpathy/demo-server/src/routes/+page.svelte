<svelte:head>
  <title>New Software Layer Demo</title>
</svelte:head>

<h1 class="text-3xl font-bold border-b-2 border-gray-800 pb-2 mb-6">
  The New Software Layer: A Demo
</h1>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
  <p>
    <strong>What you're seeing:</strong> This web server was built from English-language
    specifications in Markdown files, demonstrating the "new software layer" that
    Andrej Karpathy described. The AI tools (Claude Code) read the specs and generated
    this server.
  </p>
</div>

<h2 class="text-2xl font-semibold text-gray-700 mt-8 mb-4">What This Demo Shows</h2>
<ul class="list-disc ml-6 space-y-2">
  <li><strong><a href="/timeline" class="text-blue-600 hover:underline">The Timeline</a></strong> - A guide to AI tools from Nov 2022 to Dec 2025</li>
  <li><strong><a href="/specs" class="text-blue-600 hover:underline">The Specifications</a></strong> - The Markdown files that defined this project</li>
  <li><strong><a href="/files" class="text-blue-600 hover:underline">All Files</a></strong> - Directory listing showing everything in this project</li>
</ul>

<h2 class="text-2xl font-semibold text-gray-700 mt-8 mb-4">The Key Insight</h2>
<p class="mb-4">
  Traditional software requires precise syntax in programming languages. This project
  demonstrates a different approach: English-language descriptions in Markdown files,
  interpreted by AI tools (Claude Code), producing working software.
</p>
<p class="mb-4">
  The specifications you can view at <a href="/specs" class="text-blue-600 hover:underline">/specs</a> are the actual source
  of truth. The AI read them and generated this server. This is what Karpathy means by
  a "new programmable layer."
</p>

<h2 class="text-2xl font-semibold text-gray-700 mt-8 mb-4">Components Used</h2>
<table class="w-full border-collapse my-4">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 p-2 text-left">Concept</th>
      <th class="border border-gray-300 p-2 text-left">Example in This Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 p-2">Prompts</td>
      <td class="border border-gray-300 p-2">karpathy-new-layer.md - the complete document</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">Context</td>
      <td class="border border-gray-300 p-2">CLAUDE.md - project guidance for the AI</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">Skills</td>
      <td class="border border-gray-300 p-2">.claude/skills/start-demo-server.md - reusable command</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">Hooks</td>
      <td class="border border-gray-300 p-2">.claude/hooks.md - automated actions on events</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">Tools</td>
      <td class="border border-gray-300 p-2">File reading, code generation, terminal commands</td>
    </tr>
  </tbody>
</table>
