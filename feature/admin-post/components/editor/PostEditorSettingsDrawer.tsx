"use client"

import { PostEditorSettingsDeleteButton } from "@/feature/admin-post/components/editor/PostEditorSettingsDeleteButton"
import type { PostEditorFormValues } from "@/shared/model/admin-post.types"

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
                        value={values.thumbnail}
                        onChange={(e) => updateField("thumbnail", e.target.value)}
                        placeholder="??? URL"
                        className={SETTINGS_INPUT_CLASS}
                    />
                </div>

                {onDelete && <PostEditorSettingsDeleteButton onDelete={onDelete} />}
            </aside>
        </div>
    )
}
