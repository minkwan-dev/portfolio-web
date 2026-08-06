"use client"

import { AsyncBoundary } from "@/shared/components/AsyncBoundary"
import { PostListContent } from "@/components/blog-list/post-list-content"
import { PostListSkeleton } from "@/components/blog-list/post-list-skeleton"

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