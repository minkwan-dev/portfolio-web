"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getMainPosts } from "@/feature/home/api/homeApi"
import { postQueryKeys } from "@/shared/api/postQueryKeys"

export function useMainPostsQuery() {
    return useSuspenseQuery({
        queryKey: postQueryKeys.main(),
        queryFn: getMainPosts,
    })
}