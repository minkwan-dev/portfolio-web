"use client"

import { PostEditorPrimaryFields } from "@/feature/admin-post-editor/components/PostEditorPrimaryFields"
import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorFieldsProps = {
    values: PostEditorFormValues
    updateField: <K extends keyof PostEditorFormValues>(
        key: K,
        value: PostEditorFormValues[K],
    ) => void
}

export function PostEditorFields({ values, updateField }: PostEditorFieldsProps) {
    return <PostEditorPrimaryFields values={values} updateField={updateField} />
}
