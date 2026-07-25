"use client"

import { AsyncBoundary } from "@/components/async-boundary"
import { PostListContent } from "@/components/post-list-content"
import { PostListSkeleton } from "@/components/post-list-skeleton"

export function PostList() {
    return (
    <AsyncBoundary fallback={<PostListSkeleton />}>
        <PostListContent />
    </AsyncBoundary>
    )
}