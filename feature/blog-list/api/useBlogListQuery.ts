"use client"

import { useSuspenseInfiniteQuery } from "@tanstack/react-query"
import { getPostsPageForInfiniteQuery } from "@/feature/blog-list/api/blogListApi"
import { blogListKeys } from "@/feature/blog-list/api/blogListQueryKeys"

export function usePostsInfiniteQuery() {
    return useSuspenseInfiniteQuery({
        queryKey: blogListKeys.infinite(),
        queryFn: getPostsPageForInfiniteQuery,
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.meta.hasNextPage ? lastPage.meta.page + 1 : undefined,
    })
}