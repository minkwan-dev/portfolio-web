"use client"

import { PostEditorLayout } from "@/feature/admin-post-editor/components/PostEditorLayout"
import { useAdminPostEditorQuery } from "@/feature/admin-post-editor/api/useAdminPostEditorQuery"
import { ErrorFallback } from "@/shared/components/ErrorFallback"

type PostEditorSectionProps = {
    postId: number
}

export function PostEditorSection({ postId }: PostEditorSectionProps) {
    const { data: post, isLoading, isError, error, refetch } = useAdminPostEditorQuery(postId)

    if (isLoading) {
        return (
            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
                <div className="min-h-0 flex-1 animate-pulse bg-gray-100" />
                <div className="min-h-[24rem] flex-1 animate-pulse bg-gray-200 lg:min-h-0" />
            </div>
        )
    }

    if (isError || !post) {
        return (
            <div className="flex flex-1 items-center justify-center px-6 py-10">
                <ErrorFallback
                    error={error instanceof Error ? error : new Error("글 정보를 불러오지 못했어요")}
                    reset={() => void refetch()}
                    variant="section"
                    title="글 정보를 불러오지 못했어요"
                />
            </div>
        )
    }

    return <PostEditorLayout key={post.id} post={post} />
}
