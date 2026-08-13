"use client"

import { usePostEditorActions } from "@/feature/admin-post/hooks/usePostEditorActions"
import { usePostEditorForm } from "@/feature/admin-post/hooks/usePostEditorForm"
import { usePostEditorModals } from "@/feature/admin-post/hooks/usePostEditorModals"
import { useSaveDraftShortcut } from "@/feature/admin-post/hooks/useSaveDraftShortcut"
import type { AdminPostDetail } from "@/shared/model/admin-post.types"

export function usePostEditor(post?: AdminPostDetail) {
    const { values, updateField } = usePostEditorForm(post)
    const modals = usePostEditorModals()
    const actions = usePostEditorActions({ post, values, modals })

    useSaveDraftShortcut(
        actions.saveDraft,
        !modals.publishModalOpen && !modals.deleteModalOpen,
    )

    return {
        values,
        updateField,
        ...modals,
        ...actions,
    }
}
