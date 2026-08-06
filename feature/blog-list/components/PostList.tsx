"use client"

import { AsyncBoundary } from "@/shared/components/AsyncBoundary"
import { PostListContent } from "@/feature/blog-list/components/PostListContent"
import { PostListSkeleton } from "@/feature/blog-list/components/PostListSkeleton"

export function PostList() {
    return (
    <AsyncBoundary
        fallback={<PostListSkeleton />}
        errorTitle="글 목록을 불러오지 못했어요"
    >
        <PostListContent />
    </AsyncBoundary>
    )
}
