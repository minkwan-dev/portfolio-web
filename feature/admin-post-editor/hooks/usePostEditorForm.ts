"use client"

import { useState } from "react"
import type {
    AdminPostDetail,
    PostEditorFormValues,
    SavePostInput,
} from "@/feature/admin-post-editor/model/post-editor.types"

const EMPTY_FORM: PostEditorFormValues = {
    title: "",
    urlSlug: "",
    shortDescription: "",
    thumbnail: "",
    body: "",
    tags: "",
    isTemp: true,
    isMain: false,
    mainOrder: "",
}

function toFormValues(post?: AdminPostDetail): PostEditorFormValues {
    if (!post) return EMPTY_FORM

    return {
        title: post.title,
        urlSlug: post.urlSlug,
        shortDescription: post.shortDescription ?? "",
        thumbnail: post.thumbnail ?? "",
        body: post.body,
        tags: post.tags.join(", "),
        isTemp: post.isTemp,
        isMain: post.isMain,
        mainOrder: post.mainOrder?.toString() ?? "",
    }
}

export function toSavePostInput(values: PostEditorFormValues): SavePostInput {
    return {
        title: values.title.trim(),
        urlSlug: values.urlSlug.trim(),
        shortDescription: values.shortDescription.trim() || null,
        thumbnail: values.thumbnail.trim() || null,
        body: values.body,
        tags: values.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        isTemp: values.isTemp,
        isMain: values.isMain,
        mainOrder: values.mainOrder ? Number(values.mainOrder) : null,
    }
}

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
