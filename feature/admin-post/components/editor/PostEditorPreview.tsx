"use client"

import { PostArticle } from "@/shared/components/post/PostArticle"
import type { PostEditorFormValues } from "@/shared/model/admin-post.types"

type PostEditorPreviewProps = {
    values: PostEditorFormValues
}

export function PostEditorPreview({ values }: PostEditorPreviewProps) {
    return (
        <div className="min-h-0 flex-1 overflow-y-auto py-10">
            <div className="mx-auto w-full max-w-[800px] px-6">
                <PostArticle
                    title={values.title.trim() || "제목 없음"}
                    releasedAt={null}
                    thumbnail={values.thumbnail || null}
                    body={values.body}
                    emptyBodyMessage="본문을 입력하면 미리보기가 표시됩니다."
                />
            </div>
        </div>
    )
}