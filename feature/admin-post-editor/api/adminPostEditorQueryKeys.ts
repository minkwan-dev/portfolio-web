export const adminPostEditorKeys = {
    all: ["admin-post-editor"] as const,
    detail: (id: number) => [...adminPostEditorKeys.all, "detail", id] as const,
}
