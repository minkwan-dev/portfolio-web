"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getAdminPostById } from "@/feature/admin-post-editor/api/adminPostEditorApi"
import { adminPostQueryKeys } from "@/shared/api/adminPostQueryKeys"

export function useAdminPostEditorQuery(postId: number) {
    return useSuspenseQuery({
        queryKey: adminPostQueryKeys.detail(postId),
        queryFn: () => getAdminPostById(postId),
    })
}