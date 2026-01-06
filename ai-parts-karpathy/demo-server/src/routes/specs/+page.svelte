<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Specifications - New Software Layer</title>
</svelte:head>

<h1 class="text-3xl font-bold border-b-2 border-gray-800 pb-2 mb-6">
  Specification Files
</h1>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
  <p>
    These Markdown files are the "source code" for this project in the new software layer.
    Claude Code read these specifications and generated the working server you're using now.
  </p>
</div>

{#each data.specs as spec}
  <section class="mb-8">
    <h2 class="text-2xl font-semibold text-gray-700 mt-6 mb-2">{spec.path}</h2>
    <p class="text-gray-600 text-sm mb-2">
      <em>{spec.desc}</em> | {spec.size}
    </p>
    <details class="border border-gray-200 rounded">
      <summary class="bg-gray-50 px-4 py-2 cursor-pointer hover:bg-gray-100">
        View contents
      </summary>
      <div class="p-4 prose prose-sm max-w-none">
        {@html spec.html}
      </div>
    </details>
  </section>
{/each}
