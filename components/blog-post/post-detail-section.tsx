"use client"

import { AsyncBoundary } from "@/components/shared/async-boundary"
import { CommentSection } from "@/components/blog-post/comments/comments/comment-section"
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
            <CommentSection postSlug={slug} />
        </main>
    )
}