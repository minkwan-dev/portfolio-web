"use client"

import { useState } from "react"
import { useDeleteAdminPostMutation } from "@/feature/admin-post/api/useAdminPostMutations"
import { useToast } from "@/shared/providers/ToastProvider"

export function useAdminPostRowActions(postId: number) {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const { showToast } = useToast()
    const deleteMutation = useDeleteAdminPostMutation(postId, { redirectToList: false })

    const openDeleteModal = () => {
        setDeleteModalOpen(true)
    }

    const closeDeleteModal = () => {
        setDeleteModalOpen(false)
    }

    const confirmDelete = () => {
        deleteMutation.mutate(undefined, {
            onSuccess: () => {
                setDeleteModalOpen(false)
            },
            onError: () => {
                showToast({
                    message: "글을 삭제하지 못했어요. 다시 시도해 주세요.",
                    variant: "error",
                })
            },
        })
    }

    return {
        deleteModalOpen,
        isDeleting: deleteMutation.isPending,
        openDeleteModal,
        closeDeleteModal,
        confirmDelete,
    }
}
