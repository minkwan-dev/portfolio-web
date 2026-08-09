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

function parseTags(raw: string): string[] {
    return raw
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
}

export function PostEditorPrimaryFields({ values, updateField }: PostEditorPrimaryFieldsProps) {
    const tags = parseTags(values.tags)

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
                {tags.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2 pl-5">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                ) : null}
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
