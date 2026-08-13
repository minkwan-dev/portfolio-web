"use client"

import { useCallback } from "react"
import {
    useCreateAdminPostMutation,
    useDeleteAdminPostMutation,
    useUpdateAdminPostMutation,
} from "@/feature/admin-post/api/useAdminPostMutations"
import type { PostEditorModals } from "@/feature/admin-post/hooks/usePostEditorModals"
import { toSavePostInput } from "@/feature/admin-post/utils/admin-post.mapper"
import { validateForPublish } from "@/feature/admin-post/utils/validate-for-publish"
import type { AdminPostDetail, PostEditorFormValues } from "@/shared/model/admin-post.types"
import { useToast } from "@/shared/providers/ToastProvider"

type UsePostEditorActionsParams = {
    post?: AdminPostDetail
    values: PostEditorFormValues
    modals: PostEditorModals
}

export function usePostEditorActions({ post, values, modals }: UsePostEditorActionsParams) {
    const { showToast } = useToast()
    const createMutation = useCreateAdminPostMutation()
    const updateMutation = useUpdateAdminPostMutation(post?.id ?? 0)
    const deleteMutation = useDeleteAdminPostMutation(post?.id ?? 0)

    const isPending =
        createMutation.isPending || updateMutation.isPending || deleteMutation.isPending

    const handleMutationError = useCallback(() => {
        showToast({ message: "요청을 처리하지 못했어요. 다시 시도해 주세요.", variant: "error" })
    }, [showToast])

    const savePost = useCallback(
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

    const saveDraft = useCallback(() => {
        if (isPending) return

        savePost(true, () => {
            showToast({ message: "포스트가 임시저장되었습니다." })
        })
    }, [isPending, savePost, showToast])

    const openPublishModal = useCallback(() => {
        const validationError = validateForPublish(values)
        if (validationError) {
            showToast({ message: validationError, variant: "error" })
            return
        }

        modals.openPublishModal()
    }, [modals, showToast, values])

    const publish = useCallback(() => {
        savePost(false, () => {
            showToast({ message: "글이 출간되었습니다." })
            modals.closePublishModal()
        })
    }, [modals, savePost, showToast])

    const confirmDelete = useCallback(() => {
        deleteMutation.mutate(undefined, {
            onSuccess: () => {
                modals.closeAfterDelete()
            },
            onError: handleMutationError,
        })
    }, [deleteMutation, handleMutationError, modals])

    return {
        isPending,
        isDeleting: deleteMutation.isPending,
        canDelete: Boolean(post),
        saveDraft,
        openPublishModal,
        publish,
        confirmDelete,
    }
}
