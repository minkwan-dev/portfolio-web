"use client"

import { PostDetailArticle } from "@/feature/blog-detail/components/postDetailSection/PostDetailArticle"
import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"
import { POST_DETAIL_CONTAINER_CLASS } from "@/shared/constants/page-layout"

type PostEditorPreviewProps = {
    values: PostEditorFormValues
}

export function PostEditorPreview({ values }: PostEditorPreviewProps) {
    return (
        <div className="min-h-0 flex-1 overflow-y-auto py-10">
            <div className={POST_DETAIL_CONTAINER_CLASS}>
                <PostDetailArticle
                    title={values.title.trim() || "제목 없음"}
                    releasedAt={values.releasedAt || null}
                    thumbnail={values.thumbnail || null}
                    body={values.body}
                    emptyBodyMessage="본문을 입력하면 미리보기가 표시됩니다."
                />
            </div>
        </div>
    )
}
