import { formatPostDate } from "@/shared/utils/format-date"
import type { Comment } from "@/feature/blog-detail/model/comment.types"

type CommentListItemProps = {
    comment: Comment
}

export function CommentListItem({ comment }: CommentListItemProps) {
    return (
        <li className="flex gap-3 rounded-2xl border border-gray-200 p-4">
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
    )
}
