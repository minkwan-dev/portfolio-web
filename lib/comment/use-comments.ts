"use client"

import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { createComment, getComments } from "@/lib/comment/api"
import { commentKeys } from "@/lib/comment/keys"
import type { CommentIdentity } from "@/lib/comment/types"

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