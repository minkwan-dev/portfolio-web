export const postKeys = {
    all: ["posts"] as const,
    main: () => [...postKeys.all, "main"] as const,
    list: () => [...postKeys.all, "list"] as const,
    detail: (slug: string) => [...postKeys.all, "detail", slug] as const,
}

export const commentKeys = {
    all: ["comments"] as const,
    identity: () => [...commentKeys.all, "identity"] as const,
    byPost: (postSlug: string) => [...commentKeys.all, "post", postSlug] as const,
}