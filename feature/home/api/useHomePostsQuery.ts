"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getMainPosts } from "@/feature/home/api/homeApi"
import { homeKeys } from "@/feature/home/api/homeQueryKeys"

export function useMainPostsQuery() {
    return useSuspenseQuery({
        queryKey: homeKeys.main(),
        queryFn: getMainPosts,
    })
}