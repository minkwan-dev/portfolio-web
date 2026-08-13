"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getAdminPosts } from "@/shared/api/adminPostApi"
import { adminPostQueryKeys } from "@/feature/admin-post/api/adminPostQueryKeys"

export function useAdminPostListQuery(page = 1) {
    return useSuspenseQuery({
        queryKey: adminPostQueryKeys.list(page),
        queryFn: () => getAdminPosts(page),
    })
}