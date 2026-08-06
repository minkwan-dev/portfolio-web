export function formatPostDate(releasedAt: string | null): string {
    if (!releasedAt) return ""

    const date = new Date(releasedAt)

    if (Number.isNaN(date.getTime())) return ""

    const yy = String(date.getFullYear()).slice(-2)
    const mm = String(date.getMonth() + 1).padStart(2, "0")
    const dd = String(date.getDate()).padStart(2, "0")

    return `${yy}.${mm}.${dd}`
}