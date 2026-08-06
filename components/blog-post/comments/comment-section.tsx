"use client"

import { AsyncBoundary } from "@/shared/components/AsyncBoundary"
import { CommentForm } from "@/components/blog-post/comments/comment-form"
import { CommentListContent } from "@/components/blog-post/comments/comment-list-content"
import { CommentSectionHeader } from "@/components/blog-post/comments/comment-section-header"
import { CommentSectionSkeleton } from "@/components/blog-post/comments/comment-section-skeleton"

type CommentSectionProps = {
    postSlug: string
}

export function CommentSection({ postSlug }: CommentSectionProps) {
    return (
        <section className="flex flex-col gap-6 border-t border-gray-200 pt-8">
            <CommentForm postSlug={postSlug} />
            <AsyncBoundary
                fallback={<CommentSectionSkeleton />}
                errorVariant="compact"
                errorTitle="댓글을 불러오지 못했어요"
            >
                <div className="flex flex-col gap-6">
                    <CommentSectionHeader postSlug={postSlug} />
                    <CommentListContent postSlug={postSlug} />
                </div>
            </AsyncBoundary>
        </section>
    )
}