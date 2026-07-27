"use client"

import { AsyncBoundary } from "@/components/shared/async-boundary"
import { CommentForm } from "@/components/comments/comment-form"
import { CommentList } from "@/components/comments/comment-list"
import { CommentSectionHeader } from "@/components/comments/comment-section-header"

type CommentSectionProps = {
  postSlug: string
}

export function CommentSection({ postSlug }: CommentSectionProps) {
    return (
        <section className="flex flex-col gap-6 border-t border-gray-200 pt-8">
            <AsyncBoundary
                fallback={
                    <h2 className="text-lg font-semibold text-black">댓글</h2>
                }
            >
                <CommentSectionHeader postSlug={postSlug} />
            </AsyncBoundary>
            <CommentForm postSlug={postSlug} />
            <CommentList postSlug={postSlug} />
        </section>
    )
}