export const commentKeys = {
    all: ["comments"] as const,
    byPost: (postSlug: string) => [...commentKeys.all, "post", postSlug] as const,
}