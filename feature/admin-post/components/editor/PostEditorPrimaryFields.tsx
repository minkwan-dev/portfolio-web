"use client"

import { PostEditorTagList } from "@/feature/admin-post/components/editor/PostEditorTagList"
import type { PostEditorFormValues } from "@/shared/model/admin-post.types"
import { parseEditorTags } from "@/feature/admin-post/utils/parse-editor-tags"

type PostEditorFieldUpdater = <K extends keyof PostEditorFormValues>(
    key: K,
    value: PostEditorFormValues[K],
) => void

type PostEditorPrimaryFieldsProps = {
    values: PostEditorFormValues
    updateField: PostEditorFieldUpdater
}

export function PostEditorPrimaryFields({ values, updateField }: PostEditorPrimaryFieldsProps) {
    const tags = parseEditorTags(values.tags)

    return (
        <div className="flex flex-col">
            <input
                value={values.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="제목을 입력하세요"
                className="w-full border-0 bg-transparent pb-4 text-3xl font-bold tracking-tight outline-none placeholder:text-gray-300"
            />

            <div className="border-b border-gray-200 py-3">
                <div className="flex items-center gap-2">
                    <span className="shrink-0 text-sm text-gray-400">#</span>
                    <input
                        value={values.tags}
                        onChange={(e) => updateField("tags", e.target.value)}
                        placeholder="태그를 입력하세요 (쉼표 구분)"
                        className="flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />
                </div>
                <PostEditorTagList tags={tags} />
            </div>

            <textarea
                value={values.body}
                onChange={(e) => updateField("body", e.target.value)}
                placeholder="본문을 입력하세요 (Markdown)"
                className="min-h-[calc(100vh-16rem)] w-full resize-none border-0 bg-transparent py-6 font-mono text-sm leading-relaxed outline-none placeholder:text-gray-400"
            />
        </div>
    )
}
