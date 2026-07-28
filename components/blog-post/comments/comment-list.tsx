"use client"

import { CommentListContent } from "@/components/blog-post/comments/comment-list-content"

type CommentListProps = {
    postSlug: string
}

export function CommentList({ postSlug }: CommentListProps) {
    return <CommentListContent postSlug={postSlug} />
}