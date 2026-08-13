"use client"

import { useState } from "react"

export function usePostEditorModals() {
    const [publishModalOpen, setPublishModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    return {
        publishModalOpen,
        openPublishModal: () => setPublishModalOpen(true),
        closePublishModal: () => setPublishModalOpen(false),
        deleteModalOpen,
        openDeleteModal: () => setDeleteModalOpen(true),
        closeDeleteModal: () => setDeleteModalOpen(false),
        closeAfterDelete: () => {
            setDeleteModalOpen(false)
        },
    }
}

export type PostEditorModals = ReturnType<typeof usePostEditorModals>
