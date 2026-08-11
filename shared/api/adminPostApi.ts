import { api } from "@/shared/api/axiosInstance"

export async function deleteAdminPost(id: number): Promise<void> {
    await api.delete(`/admin/posts/${id}`)
}
