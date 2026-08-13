"use client"

import { useState } from "react"
import { toFormValues } from "@/feature/admin-post/utils/admin-post.mapper"
import type {
    AdminPostDetail,
    PostEditorFormValues,
} from "@/shared/model/admin-post.types"

export function usePostEditorForm(initialPost?: AdminPostDetail) {
    const [values, setValues] = useState<PostEditorFormValues>(() => toFormValues(initialPost))

    const updateField = <K extends keyof PostEditorFormValues>(
        key: K,
        value: PostEditorFormValues[K],
    ) => {
        setValues((prev) => ({ ...prev, [key]: value }))
    }

    return { values, updateField }
}
