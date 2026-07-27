"use client"

import { AsyncBoundary } from "@/components/shared/async-boundary"
import { CommentForm } from "@/components/comments/comment-form"
import { CommentList } from "@/components/comments/comment-list"
import { CommentSectionHeader } from "@/components/comments/comment-section-header"
import { PostDetailContent } from "@/components/blog/post-detail/post-detail-content"
import { PostDetailSkeleton } from "@/components/blog/post-detail/post-detail-skeleton"
import { POST_DETAIL_CONTAINER_CLASS } from "@/lib/constants/page-layout"

type PostDetailSectionProps = {
  slug: string
}

export function PostDetailSection({ slug }: PostDetailSectionProps) {
    return (
        <main className={`flex flex-col gap-10 py-10 ${POST_DETAIL_CONTAINER_CLASS}`}>
            <AsyncBoundary fallback={<PostDetailSkeleton />}>
                <PostDetailContent slug={slug} />
            </AsyncBoundary>

            <section className="flex flex-col gap-6 border-t border-gray-200 pt-8">
                <AsyncBoundary
                    fallback={
                        <h2 className="text-lg font-semibold text-black">댓글</h2>
                    }
                >
                    <CommentSectionHeader postSlug={slug} />
                </AsyncBoundary>
                <CommentForm postSlug={slug} />
                <CommentList postSlug={slug} />
            </section>
        </main>
    )
}