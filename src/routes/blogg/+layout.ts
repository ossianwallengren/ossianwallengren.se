export async function load({ }) {
    let posts = await Promise.all(
        Object.keys(import.meta.glob("./*/+page.md")).map(async (path) => ({
            path,
            url: path.slice(2, -9),
            metadata: (await import(/* @vite-ignore */path)).metadata,
        })),
    );

    return { posts };
}
