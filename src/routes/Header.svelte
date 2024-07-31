<script>
  import { page } from "$app/stores";
</script>

<header>
  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/om" ? "page" : undefined}>
        <a href="/om">Om</a>
      </li>
      <li aria-current={$page.url.pathname === "/blogg" ? "page" : undefined}>
        <a href="/blogg">Blogg</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: center;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(30, 30, 30, 0.7);
  }

  ul {
    position: relative;
    padding-inline: 1em;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"] a {
    color: var(--color-theme-1);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
