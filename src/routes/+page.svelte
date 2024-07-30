<script>
  import Counter from "./Counter.svelte";
</script>

<svelte:head>
  <title>Ossian Wallengren</title>
  <meta name="description" content="Ossian Wallengrens webbsida" />
</svelte:head>

<section>
  <Counter />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
