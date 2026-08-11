"use client"

import { EditPostEditorContent } from "@/feature/admin-post-editor/components/EditPostEditorContent"
import { EditPostEditorSkeleton } from "@/feature/admin-post-editor/components/EditPostEditorSkeleton"
import { AsyncBoundary } from "@/shared/components/AsyncBoundary"

type EditPostEditorProps = {
    postId: number
}

export function EditPostEditor({ postId }: EditPostEditorProps) {
    return (
        <AsyncBoundary
            fallback={<EditPostEditorSkeleton />}
            errorTitle="글 정보를 불러오지 못했어요"
        >
            <EditPostEditorContent postId={postId} />
        </AsyncBoundary>
    )
}