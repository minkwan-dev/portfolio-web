"use client"

import { useCommentsQuery } from "@/hooks/api/use-comments"

type CommentSectionHeaderProps = {
  postSlug: string
}

export function CommentSectionHeader({ postSlug }: CommentSectionHeaderProps) {
    const { data: comments } = useCommentsQuery(postSlug)

    return (
        <h2 className="text-lg font-semibold text-black">
            댓글 {comments.length}
        </h2>
    )
}