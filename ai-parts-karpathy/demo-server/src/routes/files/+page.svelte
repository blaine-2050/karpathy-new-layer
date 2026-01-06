<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Files - New Software Layer</title>
</svelte:head>

<h1 class="text-3xl font-bold border-b-2 border-gray-800 pb-2 mb-6">
  Project Files
</h1>

<p class="text-gray-600 mb-6">Complete directory listing of the project:</p>

{#snippet fileTree(items)}
  <ul class="list-none pl-0">
    {#each items as item}
      <li class="py-1 border-b border-gray-100">
        {#if item.isDir}
          <span class="font-semibold">📁 {item.name}/</span>
          {#if item.children && item.children.length > 0}
            <div class="ml-4">
              {@render fileTree(item.children)}
            </div>
          {/if}
        {:else}
          <span>📄 {item.name}</span>
          <span class="text-gray-500 text-sm ml-2">({item.size})</span>
        {/if}
      </li>
    {/each}
  </ul>
{/snippet}

{@render fileTree(data.files)}
