"use client"

import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { createComment, getComments } from "@/feature/blog-detail/api/commentApi"
import { commentKeys } from "@/feature/blog-detail/api/commentQueryKeys"
import type { CommentIdentity } from "@/feature/blog-detail/model/comment.types"

export function useCommentsQuery(postSlug: string) {
    return useSuspenseQuery({
        queryKey: commentKeys.byPost(postSlug),
        queryFn: () => getComments(postSlug),
    })
}

export function useCreateCommentMutation(postSlug: string) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (payload: CommentIdentity & { body: string }) =>
            createComment(postSlug, payload),
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: commentKeys.byPost(postSlug) })
        },
    })
}
