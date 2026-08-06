"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getPosts } from "@/feature/blog-list/api/blogListApi"
import { blogListKeys } from "@/feature/blog-list/api/blogListQueryKeys"

export function usePostsQuery() {
    return useSuspenseQuery({
        queryKey: blogListKeys.list(),
        queryFn: getPosts,
    })
}
