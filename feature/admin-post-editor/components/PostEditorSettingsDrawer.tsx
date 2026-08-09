"use client"

import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorFieldUpdater = <K extends keyof PostEditorFormValues>(
    key: K,
    value: PostEditorFormValues[K],
) => void

type PostEditorSettingsDrawerProps = {
    open: boolean
    onClose: () => void
    values: PostEditorFormValues
    updateField: PostEditorFieldUpdater
    onDelete?: () => void
}

const SETTINGS_INPUT_CLASS = "rounded-xl border border-gray-200 px-4 py-3 text-sm"

export function PostEditorSettingsDrawer({
    open,
    onClose,
    values,
    updateField,
    onDelete,
}: PostEditorSettingsDrawerProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/20">
            <button
                type="button"
                aria-label="설정 닫기"
                className="flex-1"
                onClick={onClose}
            />
            <aside className="flex h-full w-full max-w-md flex-col bg-white shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 className="text-sm font-semibold">글 설정</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-sm text-gray-500 hover:text-black"
                    >
                        닫기
                    </button>
                </div>

                <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-6">
                    <input
                        value={values.urlSlug}
                        onChange={(e) => updateField("urlSlug", e.target.value)}
                        placeholder="slug"
                        className={SETTINGS_INPUT_CLASS}
                    />
                    <input
                        value={values.shortDescription}
                        onChange={(e) => updateField("shortDescription", e.target.value)}
                        placeholder="짧은 설명"
                        className={SETTINGS_INPUT_CLASS}
                    />
                    <input
                        value={values.thumbnail}
                        onChange={(e) => updateField("thumbnail", e.target.value)}
                        placeholder="썸네일 URL"
                        className={SETTINGS_INPUT_CLASS}
                    />
                    <input
                        type="datetime-local"
                        value={values.releasedAt}
                        onChange={(e) => updateField("releasedAt", e.target.value)}
                        className={SETTINGS_INPUT_CLASS}
                    />

                    <div className="flex flex-wrap items-center gap-4 text-sm">
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

                {onDelete ? (
                    <div className="border-t border-gray-200 px-6 py-4">
                        <button
                            type="button"
                            onClick={onDelete}
                            className="text-sm text-red-500 hover:text-red-600"
                        >
                            글 삭제
                        </button>
                    </div>
                ) : null}
            </aside>
        </div>
    )
}
