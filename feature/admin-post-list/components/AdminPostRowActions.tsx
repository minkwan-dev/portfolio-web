"use client"

import { AdminPostDeleteModal } from "@/feature/admin-post-list/components/AdminPostDeleteModal"
import { AdminPostRowActionButtons } from "@/feature/admin-post-list/components/AdminPostRowActionButtons"
import { useAdminPostRowActions } from "@/feature/admin-post-list/hooks/useAdminPostRowActions"
import type { AdminPostListItem } from "@/feature/admin-post-list/model/admin-post.types"

type AdminPostRowActionsProps = {
    post: AdminPostListItem
}

export function AdminPostRowActions({ post }: AdminPostRowActionsProps) {
    const {
        deleteModalOpen,
        isDeleting,
        openDeleteModal,
        closeDeleteModal,
        confirmDelete,
    } = useAdminPostRowActions(post.id)

    return (
        <>
            <AdminPostRowActionButtons
                postId={post.id}
                postTitle={post.title}
                isDeleting={isDeleting}
                onDeleteClick={openDeleteModal}
            />

            <AdminPostDeleteModal
                open={deleteModalOpen}
                postTitle={post.title}
                isPending={isDeleting}
                onConfirm={confirmDelete}
                onClose={closeDeleteModal}
            />
        </>
    )
}