"use client"

import { SubmitEvent, useState } from "react"
import { useCreateCommentMutation } from "@/feature/blog-detail/api/useCommentsQuery"
import { useCommentIdentity } from "@/feature/blog-detail/hooks/useCommentIdentity"

export function useCommentForm(postSlug: string) {
    const { identity, refresh, isLoading: isIdentityLoading } = useCommentIdentity()
    const mutation = useCreateCommentMutation(postSlug)
    const [body, setBody] = useState("")

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!identity || !body.trim()) return

        mutation.mutate({
            body: body.trim(),
            nickname: identity.nickname,
            avatar: identity.avatar,
        })

        setBody("")
    }

    const canSubmit = Boolean(identity && body.trim() && !mutation.isPending)

    return {
        identity,
        body,
        setBody,
        refresh,
        isIdentityLoading,
        handleSubmit,
        canSubmit,
    }
}