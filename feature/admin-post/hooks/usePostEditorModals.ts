"use client"

import { useState } from "react"

export function usePostEditorModals() {
    const [settingsOpen, setSettingsOpen] = useState(false)
    const [publishModalOpen, setPublishModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    return {
        settingsOpen,
        openSettings: () => setSettingsOpen(true),
        closeSettings: () => setSettingsOpen(false),
        publishModalOpen,
        openPublishModal: () => setPublishModalOpen(true),
        closePublishModal: () => setPublishModalOpen(false),
        deleteModalOpen,
        openDeleteModal: () => setDeleteModalOpen(true),
        closeDeleteModal: () => setDeleteModalOpen(false),
        closeAfterDelete: () => {
            setDeleteModalOpen(false)
            setSettingsOpen(false)
        },
    }
}

export type PostEditorModals = ReturnType<typeof usePostEditorModals>
