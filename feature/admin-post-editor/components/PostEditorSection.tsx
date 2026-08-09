"use client"

import { PostEditorForm } from "@/feature/admin-post-editor/components/PostEditorForm"
import { useAdminPostEditorQuery } from "@/feature/admin-post-editor/api/useAdminPostEditorQuery"
import { ErrorFallback } from "@/shared/components/ErrorFallback"

type PostEditorSectionProps = {
    postId: number
}

export function PostEditorSection({ postId }: PostEditorSectionProps) {
    const { data: post, isLoading, isError, error, refetch } = useAdminPostEditorQuery(postId)

    if (isLoading) {
        return <div className="h-40 animate-pulse rounded-xl bg-gray-200" />
    }

    if (isError || !post) {
        return (
            <ErrorFallback
                error={error instanceof Error ? error : new Error("글 정보를 불러오지 못했어요")}
                reset={() => void refetch()}
                variant="section"
                title="글 정보를 불러오지 못했어요"
            />
        )
    }

    return <PostEditorForm key={post.id} post={post} />
}
