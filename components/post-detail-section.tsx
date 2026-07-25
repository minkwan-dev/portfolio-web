"use client"

import { AsyncBoundary } from "@/components/async-boundary"
import { CommentForm } from "@/components/comment-form"
import { CommentList } from "@/components/comment-list"
import { PostDetailContent } from "@/components/post-detail-content"
import { PostDetailSkeleton } from "@/components/post-detail-skeleton"

type PostDetailSectionProps = {
  slug: string
}

export function PostDetailSection({ slug }: PostDetailSectionProps) {
    return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-10">
        <AsyncBoundary fallback={<PostDetailSkeleton />}>
            <PostDetailContent slug={slug} />
        </AsyncBoundary>
        
        <section className="flex flex-col gap-6 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-black">댓글</h2>
            <CommentForm postSlug={slug} />
            <CommentList postSlug={slug} />
        </section>
    </main>
    )
}