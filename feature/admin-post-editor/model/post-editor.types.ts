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
    urlSlug: string
    shortDescription: string
    thumbnail: string
    body: string
    tags: string
    isTemp: boolean
    isMain: boolean
    mainOrder: string
}

export type SavePostInput = {
    title: string
    urlSlug: string
    shortDescription: string | null
    thumbnail: string | null
    body: string
    tags: string[]
    isTemp: boolean
    isMain: boolean
    mainOrder: number | null
}
