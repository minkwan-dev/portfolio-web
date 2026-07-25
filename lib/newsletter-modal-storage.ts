const STORAGE_KEY = "newsletter-modal-dismissed-until"

export function isNewsletterModalDismissed(): boolean {
    if (typeof window === "undefined") return true

    const until = localStorage.getItem(STORAGE_KEY)
    if (!until) return false

    return Date.now() < Number(until)
}

export function dismissNewsletterModalForMonth(): void {
    const until = Date.now() + 30 * 24 * 60 * 60 * 1000
    localStorage.setItem(STORAGE_KEY, String(until))
}