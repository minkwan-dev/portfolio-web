export const postKeys = {
    all: ["posts"] as const,
    detail: (slug: string) => [...postKeys.all, "detail", slug] as const,
}
