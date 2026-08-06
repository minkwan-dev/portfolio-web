"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { getPostBySlug } from "@/lib/post/api"
import { postKeys } from "@/lib/post/keys"

export function usePostDetailQuery(slug: string) {
    return useSuspenseQuery({
        queryKey: postKeys.detail(slug),
        queryFn: () => getPostBySlug(slug),
    })
}
