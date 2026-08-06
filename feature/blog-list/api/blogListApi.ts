import { api } from "@/shared/api/axiosInstance"
import type { PostListItem, PostsResponse } from "@/shared/model/post.types"

export async function getPosts(): Promise<PostListItem[]> {
    const response = await api.get<PostsResponse>("/posts")
    const { data: posts } = response.data
    return posts
}
