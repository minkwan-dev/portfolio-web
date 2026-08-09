import { api } from "@/shared/api/axiosInstance"
import type { AdminPostsResponse } from "@/feature/admin-post-list/model/admin-post.types"

export async function getAdminPosts(page = 1): Promise<AdminPostsResponse> {
    const response = await api.get<AdminPostsResponse>("/admin/posts", {
        params: { page, limit: 20 },
    })
    return response.data
}
