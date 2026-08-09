"use client"

import { createContext, useContext } from "react"
import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorFieldUpdater = <K extends keyof PostEditorFormValues>(
    key: K,
    value: PostEditorFormValues[K],
) => void

type PostEditorFormContextValue = {
    values: PostEditorFormValues
    updateField: PostEditorFieldUpdater
}

const PostEditorFormContext = createContext<PostEditorFormContextValue | null>(null)

type PostEditorFormProviderProps = {
    values: PostEditorFormValues
    updateField: PostEditorFieldUpdater
    children: React.ReactNode
}

export function PostEditorFormProvider({
    values,
    updateField,
    children,
}: PostEditorFormProviderProps) {
    return (
        <PostEditorFormContext.Provider value={{ values, updateField }}>
            {children}
        </PostEditorFormContext.Provider>
    )
}

export function usePostEditorFormContext() {
    const context = useContext(PostEditorFormContext)

    if (!context) {
        throw new Error("usePostEditorFormContext must be used within PostEditorFormProvider")
    }

    return context
}
