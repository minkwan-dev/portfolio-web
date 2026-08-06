import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000"

export const api = axios.create({
    baseURL: `${baseURL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10_000,
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