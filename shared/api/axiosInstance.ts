import axios from "axios"
import { getAdminToken } from "@/shared/utils/admin-token"

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000"

export const api = axios.create({
    baseURL: `${baseURL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10_000,
})

api.interceptors.request.use((config) => {
    const token = getAdminToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (process.env.NODE_ENV === "development") {
            console.error("[api]", error.response?.status, error.config?.url)
        }
        return Promise.reject(error)
    },
)
