export const commentKeys = {
    all: ["comments"] as const,
    identity: () => [...commentKeys.all, "identity"] as const,
    byPost: (postSlug: string) => [...commentKeys.all, "post", postSlug] as const,
}