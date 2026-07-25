"use client"

import { AsyncBoundary } from "@/components/async-boundary"
import { FeaturedPostsContent } from "@/components/featured-posts-content"
import { FeaturedPostsSkeleton } from "@/components/featured-posts-skeleton"

export function FeaturedPosts() {
    return (
    <AsyncBoundary fallback={<FeaturedPostsSkeleton />}>
        <FeaturedPostsContent />
    </AsyncBoundary>
    )
}