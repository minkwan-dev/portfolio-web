export type CommentIdentity = {
    nickname: string
    avatar: string
}

export type Comment = CommentIdentity & {
    id: number
    body: string
    createdAt: string
    updatedAt: string
}

export type CommentsResponse = { data: Comment[] }

export type CommentResponse = { data: Comment }