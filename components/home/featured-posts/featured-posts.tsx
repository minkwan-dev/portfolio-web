"use client"

import { AsyncBoundary } from "@/components/shared/async-boundary"
import { FeaturedPostsContent } from "@/components/home/featured-posts/featured-posts-content"
import { FeaturedPostsSkeleton } from "@/components/home/featured-posts/featured-posts-skeleton"

export function FeaturedPosts() {
    return (
    <AsyncBoundary
        fallback={<FeaturedPostsSkeleton />}
        errorTitle="추천 글을 불러오지 못했어요"
    >
        <FeaturedPostsContent />
    </AsyncBoundary>
    )
}