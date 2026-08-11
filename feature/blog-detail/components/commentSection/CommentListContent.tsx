"use client"

import { useCommentsQuery } from "@/feature/blog-detail/api/useCommentsQuery"
import { CommentEmptyState } from "@/feature/blog-detail/components/commentSection/CommentEmptyState"
import { CommentListItem } from "@/feature/blog-detail/components/commentSection/CommentListItem"

type CommentListContentProps = {
    postSlug: string
}

export function CommentListContent({ postSlug }: CommentListContentProps) {
    const { data: comments } = useCommentsQuery(postSlug)

    if (comments.length === 0) {
        return <CommentEmptyState />
    }

    return (
        <ul className="flex flex-col gap-4">
            {comments.map((comment) => (
                <CommentListItem key={comment.id} comment={comment} />
            ))}
        </ul>
    )
}
