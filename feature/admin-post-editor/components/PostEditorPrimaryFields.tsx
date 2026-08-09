"use client"

import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorFieldUpdater = <K extends keyof PostEditorFormValues>(
    key: K,
    value: PostEditorFormValues[K],
) => void

type PostEditorPrimaryFieldsProps = {
    values: PostEditorFormValues
    updateField: PostEditorFieldUpdater
}

export function PostEditorPrimaryFields({ values, updateField }: PostEditorPrimaryFieldsProps) {
    return (
        <div className="flex flex-col gap-4">
            <input
                value={values.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="제목을 입력하세요"
                className="w-full border-0 bg-transparent text-3xl font-bold tracking-tight outline-none placeholder:text-gray-300"
            />

            <div className="border-b border-gray-200" />

            <input
                value={values.tags}
                onChange={(e) => updateField("tags", e.target.value)}
                placeholder="태그를 입력하세요 (쉼표 구분)"
                className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

            <textarea
                value={values.body}
                onChange={(e) => updateField("body", e.target.value)}
                placeholder="본문을 입력하세요 (Markdown)"
                className="min-h-[calc(100vh-20rem)] w-full resize-none border-0 bg-transparent font-mono text-sm leading-relaxed outline-none placeholder:text-gray-400"
            />
        </div>
    )
}
