"use client"

import { PostEditorDeleteModal } from "@/feature/admin-post/components/editor/PostEditorDeleteModal"
import { PostEditorPreviewPane } from "@/feature/admin-post/components/editor/PostEditorPreviewPane"
import { PostEditorPublishModal } from "@/feature/admin-post/components/editor/PostEditorPublishModal"
import { PostEditorSettingsDrawer } from "@/feature/admin-post/components/editor/PostEditorSettingsDrawer"
import { PostEditorShell } from "@/feature/admin-post/components/editor/PostEditorShell"
import { PostEditorWritePane } from "@/feature/admin-post/components/editor/PostEditorWritePane"
import { usePostEditor } from "@/feature/admin-post/hooks/usePostEditor"
import type { AdminPostDetail } from "@/shared/model/admin-post.types"

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
        publish,
        deleteModalOpen,
        openDeleteModal,
        closeDeleteModal,
        confirmDelete,
        saveDraft,
    } = usePostEditor(post)

    return (
        <PostEditorShell>
            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
                <PostEditorWritePane
                    values={values}
                    updateField={updateField}
                    isPending={isPending}
                    onOpenSettings={openSettings}
                    onSaveDraft={saveDraft}
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
                onConfirm={publish}
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
