export const blogListKeys = {
    all: ["posts"] as const,
    list: () => [...blogListKeys.all, "list"] as const,
    infinite: () => [...blogListKeys.all, "infinite"] as const,
}