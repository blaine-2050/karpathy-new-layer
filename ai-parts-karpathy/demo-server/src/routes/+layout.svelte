<script>
  import '../app.css';
</script>

<div class="min-h-screen bg-white">
  <nav class="bg-gray-100 border-b border-gray-200">
    <div class="max-w-4xl mx-auto px-4 py-4">
      <div class="flex gap-6">
        <a href="/" class="text-blue-600 hover:text-blue-800 hover:underline">Home</a>
        <a href="/timeline" class="text-blue-600 hover:text-blue-800 hover:underline">Timeline</a>
        <a href="/specs" class="text-blue-600 hover:text-blue-800 hover:underline">Specifications</a>
        <a href="/files" class="text-blue-600 hover:text-blue-800 hover:underline">All Files</a>
      </div>
    </div>
  </nav>

  <main class="max-w-4xl mx-auto px-4 py-8">
    <slot />
  </main>
</div>
