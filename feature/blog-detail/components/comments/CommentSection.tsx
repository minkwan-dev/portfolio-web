"use client"

import { AsyncBoundary } from "@/shared/components/AsyncBoundary"
import { CommentForm } from "@/feature/blog-detail/components/comments/CommentForm"
import { CommentListContent } from "@/feature/blog-detail/components/comments/CommentListContent"
import { CommentSectionHeader } from "@/feature/blog-detail/components/comments/CommentSectionHeader"
import { CommentSectionSkeleton } from "@/feature/blog-detail/components/comments/CommentSectionSkeleton"

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
