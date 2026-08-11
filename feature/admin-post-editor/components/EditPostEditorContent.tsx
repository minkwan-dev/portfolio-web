"use client"

import { PostEditor } from "@/feature/admin-post-editor/components/PostEditor"
import { useAdminPostEditorQuery } from "@/feature/admin-post-editor/api/useAdminPostEditorQuery"

type EditPostEditorContentProps = {
    postId: number
}

export function EditPostEditorContent({ postId }: EditPostEditorContentProps) {
    const { data: post } = useAdminPostEditorQuery(postId)

    return <PostEditor key={post.id} post={post} />
}