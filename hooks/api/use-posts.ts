"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getMainPosts, getPostBySlug, getPosts } from "@/lib/api/posts"
import { postKeys } from "@/lib/query-keys"

export function useMainPostsQuery() {
    return useSuspenseQuery({
        queryKey: postKeys.main(),
        queryFn: getMainPosts,
    })
}

export function usePostsQuery() {
    return useSuspenseQuery({
        queryKey: postKeys.list(),
        queryFn: getPosts,
    })
}

export function usePostDetailQuery(slug: string) {
    return useSuspenseQuery({
        queryKey: postKeys.detail(slug),
        queryFn: () => getPostBySlug(slug),
    })
}