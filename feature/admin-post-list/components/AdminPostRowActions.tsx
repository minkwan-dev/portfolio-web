"use client"

import Link from "next/link"
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
        <div className="flex items-center gap-3">
            <Link
                href={`/admin/posts/${post.id}/edit`}
                className="text-gray-700 underline-offset-2 hover:underline"
            >
                수정
            </Link>
            <button
                type="button"
                disabled={deleteMutation.isPending}
                onClick={handleDelete}
                className="text-red-500 hover:text-red-600 disabled:opacity-60"
            >
                {deleteMutation.isPending ? "삭제 중..." : "삭제"}
            </button>
        </div>
    )
}
