"use client"

import { useState } from "react"
import { PostEditorDeleteModal } from "@/feature/admin-post/components/editor/PostEditorDeleteModal"
import {
    PostEditorMobileTabs,
    type EditorMobilePane,
} from "@/feature/admin-post/components/editor/PostEditorMobileTabs"
import { PostEditorPreviewPane } from "@/feature/admin-post/components/editor/PostEditorPreviewPane"
import { PostEditorPublishModal } from "@/feature/admin-post/components/editor/PostEditorPublishModal"
import { PostEditorShell } from "@/feature/admin-post/components/editor/PostEditorShell"
import { PostEditorWriteFooter } from "@/feature/admin-post/components/editor/PostEditorWriteFooter"
import { PostEditorWritePane } from "@/feature/admin-post/components/editor/PostEditorWritePane"
import { usePostEditor } from "@/feature/admin-post/hooks/usePostEditor"
import type { AdminPostDetail } from "@/shared/model/admin-post.types"

type PostEditorProps = {
    post?: AdminPostDetail
}

export function PostEditor({ post }: PostEditorProps) {
    const [mobilePane, setMobilePane] = useState<EditorMobilePane>("write")

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

    const writeColumnClassName =
        mobilePane === "write"
            ? "flex min-h-0 min-w-0 flex-1 flex-col"
            : "hidden min-h-0 min-w-0 flex-1 flex-col lg:flex"

    const previewPaneClassName =
        mobilePane === "preview"
            ? "flex min-h-0 min-w-0 flex-1 flex-col"
            : "hidden min-h-0 min-w-0 flex-1 flex-col lg:flex"

    const footerProps = {
        isPending,
        canDelete,
        onDelete: openDeleteModal,
        onSaveDraft: saveDraft,
        onPublish: openPublishModal,
    }

    return (
        <PostEditorShell>
            <PostEditorMobileTabs activePane={mobilePane} onChange={setMobilePane} />

            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
                <div className={writeColumnClassName}>
                    <PostEditorWritePane
                        className="flex min-h-0 flex-1 flex-col"
                        values={values}
                        updateField={updateField}
                    />
                    <PostEditorWriteFooter {...footerProps} className="hidden lg:block" />
                </div>

                <PostEditorPreviewPane className={previewPaneClassName} values={values} />
            </div>

            <PostEditorWriteFooter {...footerProps} className="lg:hidden" />

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
