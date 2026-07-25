import { api } from "@/lib/api/axios"
import type {
    Comment,
    CommentIdentity,
    CommentIdentityResponse,
    CommentResponse,
    CommentsResponse,
} from "@/lib/types/comment"

export async function getCommentIdentity(): Promise<CommentIdentity> {
    const response = await api.get<CommentIdentityResponse>("/comments/identity")
    const { data: identity } = response.data
    return identity
}

export async function getComments(postSlug: string): Promise<Comment[]> {
    const response = await api.get<CommentsResponse>(`/posts/${postSlug}/comments`)
    const { data: comments } = response.data
    return comments
}

export async function createComment(postSlug: string, payload: CommentIdentity & { body: string }): Promise<Comment> {
    const response = await api.post<CommentResponse>(`/posts/${postSlug}/comments`, payload)
    const { data: comment } = response.data
    return comment
}