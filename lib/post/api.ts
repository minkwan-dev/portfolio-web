import { api } from "@/shared/api/axiosInstance"
import type {
    PostDetail,
    PostDetailResponse,
    PostListItem,
    PostsResponse,
} from "@/lib/post/types"

export async function getMainPosts(): Promise<PostListItem[]> {
    const response = await api.get<PostsResponse>("/posts/main")
    const { data: posts } = response.data
    return posts
}

export async function getPosts(): Promise<PostListItem[]> {
    const response = await api.get<PostsResponse>("/posts")
    const { data: posts } = response.data
    return posts
}

export async function getPostBySlug(slug: string): Promise<PostDetail> {
    const response = await api.get<PostDetailResponse>(`/posts/${slug}`)
    const { data: post } = response.data
    return post
}