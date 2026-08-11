"use client"

import { useState } from "react"
import { useAdminPostListQuery } from "@/feature/admin-post-list/api/useAdminPostListQuery"
import type { AdminPostsResponse } from "@/feature/admin-post-list/model/admin-post.types"

export function useAdminPostListContent() {
    const [page, setPage] = useState(1)
    const { data, isLoading, isError, error, refetch, isFetching } = useAdminPostListQuery(page)

    const listError =
        error instanceof Error ? error : new Error("글 목록을 불러오지 못했어요")

    return {
        page,
        setPage,
        data,
        isLoading,
        isError,
        listError,
        refetch,
        isFetching,
    }
}

export type AdminPostListViewModel = {
    posts: AdminPostsResponse["data"]
    meta: AdminPostsResponse["meta"]
}