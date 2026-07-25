"use client"

import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { createComment, getCommentIdentity, getComments } from "@/lib/api/comments"
import { commentKeys } from "@/lib/query-keys"
import type { CommentIdentity } from "@/lib/types/comment"

export function useCommentsQuery(postSlug: string) {
    return useSuspenseQuery({
        queryKey: commentKeys.byPost(postSlug),
        queryFn: () => getComments(postSlug),
    })
}

export function useCommentIdentityQuery() {
    const query = useQuery({
        queryKey: commentKeys.identity(),
        queryFn: getCommentIdentity,
    })

    return {
        identity: query.data ?? null,
        refresh: query.refetch,
        isLoading: query.isLoading || query.isFetching,
    }
}

export function useCreateCommentMutation(postSlug: string) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (payload: CommentIdentity & { body: string }) => createComment(postSlug, payload),
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: commentKeys.byPost(postSlug) })
        },
    })
}