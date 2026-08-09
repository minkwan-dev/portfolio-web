import { api } from "@/shared/api/axiosInstance"
import type { PostListItem, PostsResponse } from "@/shared/model/post.types"

const DEFAULT_LIMIT = 12

export async function getPostsPage(page: number): Promise<PostsResponse> {
    const response = await api.get<PostsResponse>("/posts", {
        params: { page, limit: DEFAULT_LIMIT },
    })
    return response.data
}

export type PostsPage = {
    posts: PostListItem[]
    meta: PostsResponse["meta"]
}

export async function getPostsPageForInfiniteQuery({
    pageParam,
}: {
    pageParam: number
}): Promise<PostsPage> {
    const { data, meta } = await getPostsPage(pageParam)
    return { posts: data, meta }
}