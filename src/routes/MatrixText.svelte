<script lang="ts">
  import { onMount } from "svelte";

  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ1234567890!@#$%^&*()ÜÚÃ˝~ÁÇ¦Ø";
  let letters: { id: number; text: string; x: number; y: number }[] = [];
  let idCounter = 0;

  function tick() {
    letters = letters
      .filter(({ y }) => y <= 100)
      .toSpliced(0, 0, {
        id: idCounter++,
        text: " ",
        x: 5 + Math.floor(Math.random() * 20) * 5,
        y: -20,
      })
      .map(({ id, text, x, y }) => ({
        id,
        text: Math.random() > 0.1 ? text : chars[Math.floor(Math.random() * chars.length)],
        x: x,
        y: y + 2,
      }));
  }

  onMount(() => setInterval(tick, 100));
</script>

<div>
  {#each letters as { id, text, x, y } (id)}
    <p style={`left: ${x}%; top: ${y}%; transition: top 100ms linear`}>{text}</p>
  {/each}
</div>

<style>
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    user-select: none;
  }

  p {
    font-family: monospace;
    color: green;
    position: absolute;
    font-size: 16px;
  }
</style>
