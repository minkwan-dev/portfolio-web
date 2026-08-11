"use client"

import { PostEditorDeleteModal } from "@/feature/admin-post-editor/components/PostEditorDeleteModal"
import { PostEditorPreviewPane } from "@/feature/admin-post-editor/components/PostEditorPreviewPane"
import { PostEditorPublishModal } from "@/feature/admin-post-editor/components/PostEditorPublishModal"
import { PostEditorSettingsDrawer } from "@/feature/admin-post-editor/components/PostEditorSettingsDrawer"
import { PostEditorShell } from "@/feature/admin-post-editor/components/PostEditorShell"
import { PostEditorWritePane } from "@/feature/admin-post-editor/components/PostEditorWritePane"
import { usePostEditor } from "@/feature/admin-post-editor/hooks/usePostEditor"
import type { AdminPostDetail } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorProps = {
    post?: AdminPostDetail
}

export function PostEditor({ post }: PostEditorProps) {
    const {
        values,
        updateField,
        isPending,
        isDeleting,
        canDelete,
        settingsOpen,
        openSettings,
        closeSettings,
        publishModalOpen,
        openPublishModal,
        closePublishModal,
        confirmPublish,
        deleteModalOpen,
        openDeleteModal,
        closeDeleteModal,
        confirmDelete,
        handleSaveDraft,
    } = usePostEditor(post)

    return (
        <PostEditorShell>
            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
                <PostEditorWritePane
                    values={values}
                    updateField={updateField}
                    isPending={isPending}
                    onOpenSettings={openSettings}
                    onSaveDraft={handleSaveDraft}
                    onPublish={openPublishModal}
                />

                <PostEditorPreviewPane values={values} />
            </div>

            <PostEditorSettingsDrawer
                open={settingsOpen}
                onClose={closeSettings}
                values={values}
                updateField={updateField}
                onDelete={canDelete ? openDeleteModal : undefined}
            />

            <PostEditorPublishModal
                open={publishModalOpen}
                isPending={isPending}
                onConfirm={confirmPublish}
                onClose={closePublishModal}
            />

            <PostEditorDeleteModal
                open={deleteModalOpen}
                isPending={isDeleting}
                onConfirm={confirmDelete}
                onClose={closeDeleteModal}
            />
        </PostEditorShell>
    )
}
