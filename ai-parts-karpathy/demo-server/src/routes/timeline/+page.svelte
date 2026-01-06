<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Timeline - New Software Layer</title>
</svelte:head>

<p class="text-gray-600 text-sm mb-6">
  Source: karpathy-new-layer.md | {data.size} | Last modified: {data.modified}
</p>

<article class="prose prose-lg max-w-none">
  {@html data.html}
</article>
