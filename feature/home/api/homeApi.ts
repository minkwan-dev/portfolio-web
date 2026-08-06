import { api } from "@/shared/api/axiosInstance"
import type { PostListItem, PostsResponse } from "@/shared/model/post.types"

export async function getMainPosts(): Promise<PostListItem[]> {
    const response = await api.get<PostsResponse>("/posts/main")
    const { data: posts } = response.data
    return posts
}