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

export type AdminPostDetail = {
    id: number
    title: string
    urlSlug: string
    shortDescription: string | null
    thumbnail: string | null
    body: string
    isTemp: boolean
    isMain: boolean
    mainOrder: number | null
    releasedAt: string | null
    seriesId: number | null
    seriesOrder: number | null
    tags: string[]
}

export type AdminPostDetailResponse = { data: AdminPostDetail }

export type PostEditorFormValues = {
    title: string
    thumbnail: string
    body: string
    tags: string
    isTemp: boolean
}

export type SavePostInput = {
    title: string
    thumbnail: string | null
    body: string
    tags: string[]
    isTemp: boolean
}
