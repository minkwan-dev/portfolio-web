"use client"

import { useCommentsQuery } from "@/lib/comment/use-comments"
import { formatPostDate } from "@/shared/utils/format-date"

type CommentListContentProps = {
  postSlug: string
}

export function CommentListContent({ postSlug }: CommentListContentProps) {
    const { data: comments } = useCommentsQuery(postSlug)

    if (comments.length === 0) {
        return <p className="text-sm text-gray-400">아직 댓글이 없습니다.</p>
    }

    return (
    <ul className="flex flex-col gap-4">
        {comments.map((comment) => (
            <li key={comment.id} className="flex gap-3 rounded-2xl border border-gray-200 p-4">
            <img
                src={comment.avatar}
                alt=""
                className="h-10 w-10 shrink-0 rounded-full border border-gray-200 bg-gray-50"
            />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-gray-900">{comment.nickname}</span>
                <span className="text-gray-400">{formatPostDate(comment.createdAt)}</span>
                </div>
                <p className="whitespace-pre-wrap text-sm text-gray-700">{comment.body}</p>
            </div>
            </li>
        ))}
    </ul>
  )
}