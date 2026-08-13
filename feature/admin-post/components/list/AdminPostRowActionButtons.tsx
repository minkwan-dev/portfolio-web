import Link from "next/link"
import { Pencil, Trash2 } from "lucide-react"

type AdminPostRowActionButtonsProps = {
    postId: number
    postTitle: string
    isDeleting: boolean
    onDeleteClick: () => void
}

export function AdminPostRowActionButtons({
    postId,
    postTitle,
    isDeleting,
    onDeleteClick,
}: AdminPostRowActionButtonsProps) {
    return (
        <div className="flex items-center gap-2">
            <Link
                href={`/admin/posts/${postId}/edit`}
                aria-label={`"${postTitle}" 수정`}
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
            >
                <Pencil className="h-4 w-4" />
            </Link>
            <button
                type="button"
                aria-label={`"${postTitle}" 삭제`}
                disabled={isDeleting}
                onClick={onDeleteClick}
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-500 disabled:opacity-60"
            >
                <Trash2 className="h-4 w-4" />
            </button>
        </div>
    )
}