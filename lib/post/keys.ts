export const postKeys = {
    all: ["posts"] as const,
    main: () => [...postKeys.all, "main"] as const,
    list: () => [...postKeys.all, "list"] as const,
    detail: (slug: string) => [...postKeys.all, "detail", slug] as const,
}