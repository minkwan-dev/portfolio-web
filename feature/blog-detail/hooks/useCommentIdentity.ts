"use client"

import { useCallback, useEffect, useState } from "react"
import {
    generateCommentIdentity,
    loadStoredCommentIdentity,
    saveCommentIdentity,
} from "@/feature/blog-detail/hooks/comment-identity"
import type { CommentIdentity } from "@/feature/blog-detail/model/comment.types"

export function useCommentIdentity() {
    const [identity, setIdentity] = useState<CommentIdentity | null>(null)

    useEffect(() => {
        setIdentity(loadStoredCommentIdentity() ?? generateCommentIdentity())
    }, [])

    useEffect(() => {
        if (identity) saveCommentIdentity(identity)
    }, [identity])

    const refresh = useCallback(() => {
        setIdentity(generateCommentIdentity())
    }, [])

    return {
        identity,
        refresh,
        isLoading: identity === null,
    }
}
