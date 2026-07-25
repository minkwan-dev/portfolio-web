export function formatShortDescription(description: string): string {
    const trimmed = description.trim()
    if (!trimmed) return ""
    if (/\.{3}$|…$/.test(trimmed)) return trimmed
    return `${trimmed}...`
}