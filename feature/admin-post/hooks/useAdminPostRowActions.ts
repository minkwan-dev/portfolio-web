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
                    message: "?? ???? ????. ?? ??? ???.",
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