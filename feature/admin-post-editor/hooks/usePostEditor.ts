"use client"

import { useCallback, useState } from "react"
import {
    useCreateAdminPostMutation,
    useDeleteAdminPostMutation,
    useUpdateAdminPostMutation,
} from "@/feature/admin-post-editor/api/useAdminPostMutations"
import { toSavePostInput } from "@/feature/admin-post-editor/utils/admin-post.mapper"
import { usePostEditorForm } from "@/feature/admin-post-editor/hooks/usePostEditorForm"
import { useSaveDraftShortcut } from "@/feature/admin-post-editor/hooks/useSaveDraftShortcut"
import type { AdminPostDetail } from "@/shared/model/admin-post.types"
import { validateForPublish } from "@/feature/admin-post-editor/utils/validate-for-publish"
import { useToast } from "@/shared/providers/ToastProvider"

export function usePostEditor(post?: AdminPostDetail) {
    const [settingsOpen, setSettingsOpen] = useState(false)
    const [publishModalOpen, setPublishModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const { showToast } = useToast()
    const { values, updateField } = usePostEditorForm(post)
    const createMutation = useCreateAdminPostMutation()
    const updateMutation = useUpdateAdminPostMutation(post?.id ?? 0)
    const deleteMutation = useDeleteAdminPostMutation(post?.id ?? 0)

    const isPending =
        createMutation.isPending || updateMutation.isPending || deleteMutation.isPending

    const handleMutationError = useCallback(() => {
        showToast({ message: "요청을 처리하지 못했어요. 다시 시도해 주세요.", variant: "error" })
    }, [showToast])

    const handleSave = useCallback(
        (isTemp: boolean, onSuccess?: () => void) => {
            const input = toSavePostInput(values, isTemp)

            if (post) {
                updateMutation.mutate(input, {
                    onSuccess: () => {
                        onSuccess?.()
                    },
                    onError: handleMutationError,
                })
                return
            }

            createMutation.mutate(input, {
                onSuccess: () => {
                    onSuccess?.()
                },
                onError: handleMutationError,
            })
        },
        [createMutation, handleMutationError, post, updateMutation, values],
    )

    const handleSaveDraft = useCallback(() => {
        if (isPending) return

        handleSave(true, () => {
            showToast({ message: "포스트가 임시저장되었습니다." })
        })
    }, [handleSave, isPending, showToast])

    useSaveDraftShortcut(handleSaveDraft, !publishModalOpen && !deleteModalOpen)

    const openPublishModal = () => {
        const validationError = validateForPublish(values)
        if (validationError) {
            showToast({ message: validationError, variant: "error" })
            return
        }

        setPublishModalOpen(true)
    }

    const confirmPublish = () => {
        handleSave(false, () => {
            showToast({ message: "글이 출간되었습니다." })
            setPublishModalOpen(false)
        })
    }

    const openDeleteModal = () => {
        setDeleteModalOpen(true)
    }

    const confirmDelete = () => {
        deleteMutation.mutate(undefined, {
            onSuccess: () => {
                setDeleteModalOpen(false)
                setSettingsOpen(false)
            },
            onError: handleMutationError,
        })
    }

    return {
        values,
        updateField,
        isPending,
        isDeleting: deleteMutation.isPending,
        canDelete: Boolean(post),
        settingsOpen,
        openSettings: () => setSettingsOpen(true),
        closeSettings: () => setSettingsOpen(false),
        publishModalOpen,
        openPublishModal,
        closePublishModal: () => setPublishModalOpen(false),
        confirmPublish,
        deleteModalOpen,
        openDeleteModal,
        closeDeleteModal: () => setDeleteModalOpen(false),
        confirmDelete,
        handleSaveDraft,
    }
}
