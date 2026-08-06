export const blogDetailKeys = {
    all: ["posts"] as const,
    detail: (slug: string) => [...blogDetailKeys.all, "detail", slug] as const,
}
