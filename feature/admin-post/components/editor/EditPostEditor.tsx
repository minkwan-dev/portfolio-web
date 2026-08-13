"use client"

import { useAdminPostEditorQuery } from "@/feature/admin-post/api/useAdminPostEditorQuery"
import { EditPostEditorSkeleton } from "@/feature/admin-post/components/editor/EditPostEditorSkeleton"
import { PostEditor } from "@/feature/admin-post/components/editor/PostEditor"
import { AsyncBoundary } from "@/shared/components/AsyncBoundary"

type EditPostEditorProps = {
    postId: number
}

function EditPostEditorLoaded({ postId }: EditPostEditorProps) {
    const { data: post } = useAdminPostEditorQuery(postId)

    return <PostEditor key={post.id} post={post} />
}

export function EditPostEditor({ postId }: EditPostEditorProps) {
    return (
        <AsyncBoundary
            fallback={<EditPostEditorSkeleton />}
            errorTitle="글 정보를 불러오지 못했어요"
        >
            <EditPostEditorLoaded postId={postId} />
        </AsyncBoundary>
    )
}
