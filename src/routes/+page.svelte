<script>
  import img from "./ossianwallengren.png";
  import MatrixText from "./MatrixText.svelte";
</script>

<svelte:head>
  <title>Ossian Wallengren</title>
  <meta name="description" content="Ossian Wallengrens webbsida" />
</svelte:head>

<section>
  <main>
    <p>Ossian</p>
    <p>Wallengren</p>
  </main>
  <img src={img} alt="Ossian Wallengren" />
  <MatrixText />
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  main {
    font-size: 2rem;
    color: var(--color-theme-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;
  }

  main p {
    margin-block: 0;
  }
</style>
