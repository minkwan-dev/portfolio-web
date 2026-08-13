"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getAdminPostById } from "@/shared/api/adminPostApi"
import { adminPostQueryKeys } from "@/shared/api/adminPostQueryKeys"

export function useAdminPostEditorQuery(postId: number) {
    return useSuspenseQuery({
        queryKey: adminPostQueryKeys.detail(postId),
        queryFn: () => getAdminPostById(postId),
    })
}