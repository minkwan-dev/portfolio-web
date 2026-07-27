"use client"

import { AsyncBoundary } from "@/components/shared/async-boundary"
import { FeaturedPostsContent } from "@/components/home/featured-posts/featured-posts-content"
import { FeaturedPostsSkeleton } from "@/components/home/featured-posts/featured-posts-skeleton"

export function FeaturedPosts() {
    return (
    <AsyncBoundary fallback={<FeaturedPostsSkeleton />}>
        <FeaturedPostsContent />
    </AsyncBoundary>
    )
}