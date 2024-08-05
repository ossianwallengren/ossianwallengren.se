export async function load() {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("./*/+page.md")).map(async ([path, module]) => ({
      path,
      url: path.slice(2, -9),
      metadata: ((await module()) as { metadata: { title: string } }).metadata,
    })),
  );

  return { posts };
}
