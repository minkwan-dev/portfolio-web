"use client"

import { useState } from "react"
import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorFieldUpdater = <K extends keyof PostEditorFormValues>(
    key: K,
    value: PostEditorFormValues[K],
) => void

type PostEditorSettingsPanelProps = {
    values: PostEditorFormValues
    updateField: PostEditorFieldUpdater
}

const SETTINGS_INPUT_CLASS = "rounded-xl border border-gray-200 px-4 py-3 text-sm"

export function PostEditorSettingsPanel({ values, updateField }: PostEditorSettingsPanelProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="border-t border-gray-200 pt-4">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="text-sm text-gray-500 hover:text-black"
            >
                {open ? "설정 접기" : "설정 펼치기"}
            </button>

            {open ? (
                <div className="mt-4 flex flex-col gap-4">
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
            ) : null}
        </div>
    )
}
