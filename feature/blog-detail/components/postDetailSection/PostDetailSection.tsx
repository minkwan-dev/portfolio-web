"use client"

import { AsyncBoundary } from "@/shared/components/AsyncBoundary"
import { PostDetailContent } from "@/feature/blog-detail/components/postDetailSection/PostDetailContent"
import { PostDetailSkeleton } from "@/feature/blog-detail/components/postDetailSection/PostDetailSkeleton"

type PostDetailSectionProps = {
    slug: string
}

export function PostDetailSection({ slug }: PostDetailSectionProps) {
    return (
        <AsyncBoundary
            fallback={<PostDetailSkeleton />}
            errorTitle="글을 불러오지 못했어요"
            errorDescription="네트워크 상태를 확인해 주세요."
        >
            <PostDetailContent slug={slug} />
        </AsyncBoundary>
    )
}