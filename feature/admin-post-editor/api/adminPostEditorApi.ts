import { api } from "@/shared/api/axiosInstance"
import type {
    AdminPostDetail,
    AdminPostDetailResponse,
    SavePostInput,
} from "@/feature/admin-post-editor/model/post-editor.types"

export async function getAdminPostById(id: number): Promise<AdminPostDetail> {
    const response = await api.get<AdminPostDetailResponse>(`/admin/posts/${id}`)
    return response.data.data
}

export async function createAdminPost(input: SavePostInput): Promise<AdminPostDetail> {
    const response = await api.post<AdminPostDetailResponse>("/admin/posts", input)
    return response.data.data
}

export async function updateAdminPost(
    id: number,
    input: Partial<SavePostInput>,
): Promise<AdminPostDetail> {
    const response = await api.patch<AdminPostDetailResponse>(`/admin/posts/${id}`, input)
    return response.data.data
}

export async function deleteAdminPost(id: number): Promise<void> {
    await api.delete(`/admin/posts/${id}`)
}
