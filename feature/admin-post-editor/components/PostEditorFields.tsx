"use client"

import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorFieldsProps = {
    values: PostEditorFormValues
    updateField: <K extends keyof PostEditorFormValues>(
        key: K,
        value: PostEditorFormValues[K],
    ) => void
}

export function PostEditorFields({ values, updateField }: PostEditorFieldsProps) {
    return (
        <div className="flex flex-col gap-4">
            <input
                value={values.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="제목"
                className="rounded-xl border border-gray-200 px-4 py-3"
            />
            <input
                value={values.urlSlug}
                onChange={(e) => updateField("urlSlug", e.target.value)}
                placeholder="slug"
                className="rounded-xl border border-gray-200 px-4 py-3"
            />
            <input
                value={values.shortDescription}
                onChange={(e) => updateField("shortDescription", e.target.value)}
                placeholder="짧은 설명"
                className="rounded-xl border border-gray-200 px-4 py-3"
            />
            <input
                value={values.thumbnail}
                onChange={(e) => updateField("thumbnail", e.target.value)}
                placeholder="썸네일 URL"
                className="rounded-xl border border-gray-200 px-4 py-3"
            />
            <input
                value={values.tags}
                onChange={(e) => updateField("tags", e.target.value)}
                placeholder="태그 (쉼표 구분)"
                className="rounded-xl border border-gray-200 px-4 py-3"
            />
            <input
                type="datetime-local"
                value={values.releasedAt}
                onChange={(e) => updateField("releasedAt", e.target.value)}
                className="rounded-xl border border-gray-200 px-4 py-3"
            />
            <textarea
                value={values.body}
                onChange={(e) => updateField("body", e.target.value)}
                placeholder="본문 (Markdown)"
                rows={24}
                className="min-h-[32rem] rounded-xl border border-gray-200 px-4 py-3 font-mono text-sm"
            />

            <div className="flex flex-wrap items-center gap-4 text-sm">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={values.isTemp}
                        onChange={(e) => updateField("isTemp", e.target.checked)}
                    />
                    임시 저장
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={values.isMain}
                        onChange={(e) => updateField("isMain", e.target.checked)}
                    />
                    메인 노출
                </label>
                <input
                    value={values.mainOrder}
                    onChange={(e) => updateField("mainOrder", e.target.value)}
                    placeholder="메인 순서"
                    className="w-28 rounded-xl border border-gray-200 px-3 py-2"
                />
            </div>
        </div>
    )
}
