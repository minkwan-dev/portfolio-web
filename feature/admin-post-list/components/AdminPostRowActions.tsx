"use client"

import Link from "next/link"
import { Pencil, Trash2 } from "lucide-react"
import { useDeleteAdminPostMutation } from "@/feature/admin-post-editor/api/useAdminPostMutations"
import type { AdminPostListItem } from "@/feature/admin-post-list/model/admin-post.types"

type AdminPostRowActionsProps = {
    post: AdminPostListItem
}

export function AdminPostRowActions({ post }: AdminPostRowActionsProps) {
    const deleteMutation = useDeleteAdminPostMutation(post.id, { redirectToList: false })

    const handleDelete = () => {
        const confirmed = confirm(`"${post.title}" 글을 정말 삭제할까요?`)
        if (!confirmed) return
        deleteMutation.mutate()
    }

    return (
        <div className="flex items-center gap-2">
            <Link
                href={`/admin/posts/${post.id}/edit`}
                aria-label={`"${post.title}" 수정`}
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
            >
                <Pencil className="h-4 w-4" />
            </Link>
            <button
                type="button"
                aria-label={`"${post.title}" 삭제`}
                disabled={deleteMutation.isPending}
                onClick={handleDelete}
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-500 disabled:opacity-60"
            >
                <Trash2 className="h-4 w-4" />
            </button>
        </div>
    )
}
