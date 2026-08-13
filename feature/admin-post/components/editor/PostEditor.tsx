"use client"

import { PostEditorDeleteModal } from "@/feature/admin-post/components/editor/PostEditorDeleteModal"
import { PostEditorPreviewPane } from "@/feature/admin-post/components/editor/PostEditorPreviewPane"
import { PostEditorPublishModal } from "@/feature/admin-post/components/editor/PostEditorPublishModal"
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
                    canDelete={canDelete}
                    onDelete={openDeleteModal}
                    onSaveDraft={saveDraft}
                    onPublish={openPublishModal}
                />

                <PostEditorPreviewPane values={values} />
            </div>

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
