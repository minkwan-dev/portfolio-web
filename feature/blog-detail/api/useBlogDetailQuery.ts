"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getPostBySlug } from "@/feature/blog-detail/api/blogDetailApi"
import { postQueryKeys } from "@/shared/api/postQueryKeys"

export function usePostDetailQuery(slug: string) {
    return useSuspenseQuery({
        queryKey: postQueryKeys.detail(slug),
        queryFn: () => getPostBySlug(slug),
    })
}
