import { api } from "@/shared/api/axiosInstance"

type UploadAdminImageResponse = {
    data: {
        url: string
    }
}

function resolveUploadUrl(path: string): string {
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path
    }

    const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000"
    return `${baseURL}${path}`
}

export async function uploadAdminImage(file: File): Promise<string> {
    const formData = new FormData()
    formData.append("file", file)

    const response = await api.post<UploadAdminImageResponse>("/admin/uploads", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })

    return resolveUploadUrl(response.data.data.url)
}
