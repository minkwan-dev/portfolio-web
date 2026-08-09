export type AdminPostListItem = {
    id: number
    title: string
    urlSlug: string
    thumbnail: string | null
    isTemp: boolean
    isMain: boolean
    mainOrder: number | null
    releasedAt: string | null
    tags: string[]
}

export type AdminPostsPaginationMeta = {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNextPage: boolean
}

export type AdminPostsResponse = {
    data: AdminPostListItem[]
    meta: AdminPostsPaginationMeta
}
