"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getAdminPostById } from "@/feature/admin-post-editor/api/adminPostEditorApi"
import { adminPostEditorKeys } from "@/feature/admin-post-editor/api/adminPostEditorQueryKeys"

export function useAdminPostEditorQuery(postId: number) {
    return useSuspenseQuery({
        queryKey: adminPostEditorKeys.detail(postId),
        queryFn: () => getAdminPostById(postId),
    })
}