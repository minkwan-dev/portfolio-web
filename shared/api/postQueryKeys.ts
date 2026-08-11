export const postQueryKeys = {
    all: ["posts"] as const,
    main: () => [...postQueryKeys.all, "main"] as const,
    list: () => [...postQueryKeys.all, "list"] as const,
    infinite: () => [...postQueryKeys.all, "infinite"] as const,
    detail: (slug: string) => [...postQueryKeys.all, "detail", slug] as const,
}
