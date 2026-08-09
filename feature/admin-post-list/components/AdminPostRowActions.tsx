"use client"

import { useState } from "react"
import Link from "next/link"
import { Pencil, Trash2 } from "lucide-react"
import { useDeleteAdminPostMutation } from "@/feature/admin-post-editor/api/useAdminPostMutations"
import type { AdminPostListItem } from "@/feature/admin-post-list/model/admin-post.types"
import { ConfirmModal } from "@/shared/components/ConfirmModal"
import { useToast } from "@/shared/providers/ToastProvider"

type AdminPostRowActionsProps = {
    post: AdminPostListItem
}

export function AdminPostRowActions({ post }: AdminPostRowActionsProps) {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const { showToast } = useToast()
    const deleteMutation = useDeleteAdminPostMutation(post.id, { redirectToList: false })

    const handleDeleteConfirm = () => {
        deleteMutation.mutate(undefined, {
            onSuccess: () => {
                setDeleteModalOpen(false)
            },
            onError: () => {
                showToast({ message: "글을 삭제하지 못했어요. 다시 시도해 주세요.", variant: "error" })
            },
        })
    }

    return (
        <>
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
                    onClick={() => setDeleteModalOpen(true)}
                    className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-500 disabled:opacity-60"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>

            <ConfirmModal
                open={deleteModalOpen}
                title="글을 삭제할까요?"
                description={`"${post.title}" 글을 삭제하면 복구할 수 없습니다.`}
                confirmLabel="삭제"
                variant="danger"
                isPending={deleteMutation.isPending}
                onConfirm={handleDeleteConfirm}
                onClose={() => setDeleteModalOpen(false)}
            />
        </>
    )
}
