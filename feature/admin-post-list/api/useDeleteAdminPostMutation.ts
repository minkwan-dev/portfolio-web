"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteAdminPost } from "@/shared/api/adminPostApi"
import { adminPostQueryKeys } from "@/shared/api/adminPostQueryKeys"
import { postQueryKeys } from "@/shared/api/postQueryKeys"

export function useDeleteAdminPostMutation(postId: number) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => deleteAdminPost(postId),
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: adminPostQueryKeys.all })
            void queryClient.invalidateQueries({ queryKey: postQueryKeys.all })
        },
    })
}
