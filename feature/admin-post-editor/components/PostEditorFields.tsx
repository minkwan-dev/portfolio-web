"use client"

import { PostEditorPrimaryFields } from "@/feature/admin-post-editor/components/PostEditorPrimaryFields"
import { PostEditorSettingsPanel } from "@/feature/admin-post-editor/components/PostEditorSettingsPanel"
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
        <div className="flex flex-col gap-6">
            <PostEditorPrimaryFields values={values} updateField={updateField} />
            <PostEditorSettingsPanel values={values} updateField={updateField} />
        </div>
    )
}
