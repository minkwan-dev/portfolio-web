export function generateDraftSlug(title?: string): string {
    const normalized = (title ?? "")
        .trim()
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "")

    const base = normalized || "draft"
    return `${base}-${Date.now()}`
}
