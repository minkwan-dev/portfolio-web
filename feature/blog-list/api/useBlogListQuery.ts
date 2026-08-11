"use client"

import { useSuspenseInfiniteQuery } from "@tanstack/react-query"
import { getPostsPageForInfiniteQuery } from "@/feature/blog-list/api/blogListApi"
import { postQueryKeys } from "@/shared/api/postQueryKeys"

export function usePostsInfiniteQuery() {
    return useSuspenseInfiniteQuery({
        queryKey: postQueryKeys.infinite(),
        queryFn: getPostsPageForInfiniteQuery,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.meta.hasNextPage ? lastPage.meta.page + 1 : undefined,
    })
}