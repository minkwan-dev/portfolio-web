"use client"

import { CommentListContent } from "@/feature/blog-detail/components/comments/CommentListContent"

type CommentListProps = {
    postSlug: string
}

export function CommentList({ postSlug }: CommentListProps) {
    return <CommentListContent postSlug={postSlug} />
}
