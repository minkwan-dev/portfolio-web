export type PostListItem = {
    id: number
    title: string
    urlSlug: string
    thumbnail: string | null
    releasedAt: string | null
    tags: string[]
}

export type PostsBySlugsResponse = {
    data: PostListItem[]
}