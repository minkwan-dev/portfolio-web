"use client"

import { AsyncBoundary } from "@/shared/components/AsyncBoundary"
import { FeaturedPostsContent } from "@/feature/home/components/featuredPosts/FeaturedPostsContent"
import { FeaturedPostsSkeleton } from "@/feature/home/components/featuredPosts/FeaturedPostsSkeleton"

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