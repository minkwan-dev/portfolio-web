"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getAdminPosts } from "@/feature/admin-post-list/api/adminPostListApi"
import { adminPostListKeys } from "@/feature/admin-post-list/api/adminPostListQueryKeys"

export function useAdminPostListQuery(page = 1) {
    return useSuspenseQuery({
        queryKey: adminPostListKeys.list(page),
        queryFn: () => getAdminPosts(page),
    })
}