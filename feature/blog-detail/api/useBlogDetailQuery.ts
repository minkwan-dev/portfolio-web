"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getPostBySlug } from "@/feature/blog-detail/api/blogDetailApi"
import { blogDetailKeys } from "@/feature/blog-detail/api/blogDetailQueryKeys"

export function usePostDetailQuery(slug: string) {
    return useSuspenseQuery({
        queryKey: blogDetailKeys.detail(slug),
        queryFn: () => getPostBySlug(slug),
    })
}
