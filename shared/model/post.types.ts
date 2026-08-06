export type PostListItem = {
    id: number
    title: string
    urlSlug: string
    thumbnail: string | null
    releasedAt: string | null
    tags: string[]
}

export type PostDetail = PostListItem & {
    shortDescription: string | null
    body: string
    commentsCount: number
    series: {
        name: string
        urlSlug: string
        order: number | null
    } | null
}

export type PostsResponse = { data: PostListItem[] }

export type PostDetailResponse = { data: PostDetail }