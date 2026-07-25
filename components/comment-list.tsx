"use client"

import { AsyncBoundary } from "@/components/async-boundary"
import { CommentListContent } from "@/components/comment-list-content"
import { CommentListSkeleton } from "@/components/comment-list-skeleton"

type CommentListProps = {
  postSlug: string
}

export function CommentList({ postSlug }: CommentListProps) {
    return (
    <AsyncBoundary fallback={<CommentListSkeleton />}>
        <CommentListContent postSlug={postSlug} />
    </AsyncBoundary>
    )
}