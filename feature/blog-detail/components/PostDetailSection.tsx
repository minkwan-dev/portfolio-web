"use client"

import { AsyncBoundary } from "@/shared/components/AsyncBoundary"
import { CommentSection } from "@/feature/blog-detail/components/comments/CommentSection"
import { PostDetailContent } from "@/feature/blog-detail/components/PostDetailContent"
import { PostDetailSkeleton } from "@/feature/blog-detail/components/PostDetailSkeleton"
import { POST_DETAIL_CONTAINER_CLASS } from "@/shared/constants/page-layout"

type PostDetailSectionProps = {
  slug: string
}

export function PostDetailSection({ slug }: PostDetailSectionProps) {
    return (
        <main className={`flex flex-col gap-10 py-10 ${POST_DETAIL_CONTAINER_CLASS}`}>
            <AsyncBoundary
                fallback={<PostDetailSkeleton />}
                errorTitle="글을 불러오지 못했어요"
                errorDescription="네트워크 상태를 확인해 주세요."
            >
                <PostDetailContent slug={slug} />
            </AsyncBoundary>
            <CommentSection postSlug={slug} />
        </main>
    )
}
