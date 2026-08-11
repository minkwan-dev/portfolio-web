"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getAdminPosts } from "@/feature/admin-post-list/api/adminPostListApi"
import { adminPostQueryKeys } from "@/shared/api/adminPostQueryKeys"

export function useAdminPostListQuery(page = 1) {
    return useSuspenseQuery({
        queryKey: adminPostQueryKeys.list(page),
        queryFn: () => getAdminPosts(page),
    })
}