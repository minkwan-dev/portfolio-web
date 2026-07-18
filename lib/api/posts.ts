import { api } from "@/lib/api/axios"
import type { PostListItem, PostsBySlugsResponse } from "@/lib/types/post"

export async function getPostsBySlugs(slugs: string[],): Promise<PostListItem[]> {
    const { data } = await api.get<PostsBySlugsResponse>("/posts", {
        params: { slugs: slugs.join(",") },
    })

    return data.data
}