export const adminPostQueryKeys = {
    all: ["admin-posts"] as const,
    list: (page = 1) => [...adminPostQueryKeys.all, "list", page] as const,
    detail: (id: number) => [...adminPostQueryKeys.all, "detail", id] as const,
}
