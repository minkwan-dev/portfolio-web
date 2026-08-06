import { api } from "@/shared/api/axiosInstance"
import type {
    PostDetail,
    PostDetailResponse,
} from "@/shared/model/post.types"

export async function getPostBySlug(slug: string): Promise<PostDetail> {
    const response = await api.get<PostDetailResponse>(`/posts/${slug}`)
    const { data: post } = response.data
    return post
}
