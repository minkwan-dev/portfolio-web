export const adminPostListKeys = {
    all: ["admin-posts"] as const,
    list: (page = 1) => [...adminPostListKeys.all, "list", page] as const,
}
