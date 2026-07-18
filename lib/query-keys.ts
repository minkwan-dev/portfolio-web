export const postKeys = {
    all: ["posts"] as const,
    bySlugs: (slugs: string[]) =>
        [...postKeys.all, "slugs", ...slugs] as const,
}