"use client"

import { useState } from "react"
import {
    useCreateAdminPostMutation,
    useDeleteAdminPostMutation,
    useUpdateAdminPostMutation,
} from "@/feature/admin-post-editor/api/useAdminPostMutations"
import { PostEditorFields } from "@/feature/admin-post-editor/components/PostEditorFields"
import { PostEditorPreview } from "@/feature/admin-post-editor/components/PostEditorPreview"
import { PostEditorSettingsDrawer } from "@/feature/admin-post-editor/components/PostEditorSettingsDrawer"
import { PostEditorShell } from "@/feature/admin-post-editor/components/PostEditorShell"
import { PostEditorWriteFooter } from "@/feature/admin-post-editor/components/PostEditorWriteFooter"
import {
    toSavePostInput,
    usePostEditorForm,
} from "@/feature/admin-post-editor/hooks/usePostEditorForm"
import type { AdminPostDetail } from "@/feature/admin-post-editor/model/post-editor.types"
import { validateForPublish } from "@/feature/admin-post-editor/utils/validate-for-publish"
import { ConfirmModal } from "@/shared/components/ConfirmModal"
import { useToast } from "@/shared/providers/ToastProvider"

type PostEditorLayoutProps = {
    post?: AdminPostDetail
}

export function PostEditorLayout({ post }: PostEditorLayoutProps) {
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

    const handleMutationError = () => {
        showToast({ message: "요청을 처리하지 못했어요. 다시 시도해 주세요.", variant: "error" })
    }

    const handleSave = (isTemp: boolean, onSuccess?: () => void) => {
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
    }

    const handleSaveDraft = () => {
        handleSave(true, () => {
            showToast({ message: "포스트가 임시저장되었습니다." })
        })
    }

    const handlePublishClick = () => {
        const validationError = validateForPublish(values)
        if (validationError) {
            showToast({ message: validationError, variant: "error" })
            return
        }

        setPublishModalOpen(true)
    }

    const handlePublishConfirm = () => {
        handleSave(false, () => {
            showToast({ message: "글이 출간되었습니다." })
            setPublishModalOpen(false)
        })
    }

    const handleDeleteClick = () => {
        setDeleteModalOpen(true)
    }

    const handleDeleteConfirm = () => {
        deleteMutation.mutate(undefined, {
            onSuccess: () => {
                setDeleteModalOpen(false)
                setSettingsOpen(false)
            },
            onError: handleMutationError,
        })
    }

    return (
        <PostEditorShell>
            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
                <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white lg:border-r lg:border-gray-200">
                    <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-8">
                        <PostEditorFields values={values} updateField={updateField} />
                    </div>
                    <PostEditorWriteFooter
                        isPending={isPending}
                        onOpenSettings={() => setSettingsOpen(true)}
                        onSaveDraft={handleSaveDraft}
                        onPublish={handlePublishClick}
                    />
                </div>

                <div className="flex min-h-[24rem] min-w-0 flex-1 flex-col overflow-hidden bg-gray-50 lg:min-h-0">
                    <PostEditorPreview values={values} />
                </div>
            </div>

            <PostEditorSettingsDrawer
                open={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                values={values}
                updateField={updateField}
                onDelete={post ? handleDeleteClick : undefined}
            />

            <ConfirmModal
                open={publishModalOpen}
                title="글을 출간할까요?"
                description="출간하면 블로그에 공개됩니다."
                confirmLabel="출간하기"
                isPending={isPending}
                onConfirm={handlePublishConfirm}
                onClose={() => setPublishModalOpen(false)}
            />

            <ConfirmModal
                open={deleteModalOpen}
                title="글을 삭제할까요?"
                description="삭제한 글은 복구할 수 없습니다."
                confirmLabel="삭제"
                variant="danger"
                isPending={deleteMutation.isPending}
                onConfirm={handleDeleteConfirm}
                onClose={() => setDeleteModalOpen(false)}
            />
        </PostEditorShell>
    )
}
