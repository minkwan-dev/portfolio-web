"use client"

import { AsyncBoundary } from "@/components/shared/async-boundary"
import { PostListContent } from "@/components/blog-list/post-list/post-list-content"
import { PostListSkeleton } from "@/components/blog-list/post-list/post-list-skeleton"

export function PostList() {
    return (
    <AsyncBoundary fallback={<PostListSkeleton />}>
        <PostListContent />
    </AsyncBoundary>
    )
}