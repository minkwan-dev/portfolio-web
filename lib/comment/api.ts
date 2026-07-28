import { api } from "@/lib/api/axios"
import type {
    Comment,
    CommentIdentity,
    CommentResponse,
    CommentsResponse,
} from "@/lib/comment/types"

export async function getComments(postSlug: string): Promise<Comment[]> {
    const response = await api.get<CommentsResponse>(`/posts/${postSlug}/comments`)
    const { data: comments } = response.data
    return comments
}

export async function createComment(
    postSlug: string,
    payload: CommentIdentity & { body: string },
): Promise<Comment> {
    const response = await api.post<CommentResponse>(`/posts/${postSlug}/comments`, payload)
    const { data: comment } = response.data
    return comment
}