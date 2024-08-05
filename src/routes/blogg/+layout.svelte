<script>
  export let data;
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Blogg</title>
  <meta name="description" content="Ossian Wallengrens blogg" />
</svelte:head>

<div class:toplevel={$page.route.id === "/blogg"}>
  <aside>
    <ul>
      {#each data.posts as post}
        <li class:active={$page.route.id?.slice(7) === post.url}>
          <a href={`/blogg/${post.url}`}>{post.metadata.title}</a>
        </li>
      {/each}
    </ul>
  </aside>
  {#if $page.route.id !== "/blogg"}
    <main>
      <slot />
    </main>
  {/if}
</div>

<style>
  div {
    display: flex;
    justify-content: stretch;
    gap: 8em;
  }

  aside {
    width: 300px;
    flex-shrink: 0;
  }

  .toplevel {
    justify-content: center;
  }

  .toplevel aside {
    margin: 0 auto;
  }

  main {
    max-width: 40em;
  }

  main :global(img) {
    width: 100%;
  }
</style>
