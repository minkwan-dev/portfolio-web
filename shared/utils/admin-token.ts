import { ADMIN_TOKEN_STORAGE_KEY } from "@/shared/constants/admin-auth"

export function getAdminToken(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)
}

export function setAdminToken(token: string): void {
    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, token)
}

export function clearAdminToken(): void {
    localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY)
}
