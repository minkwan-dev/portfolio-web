"use client"

import { useState } from "react"
import { useAdminPostListQuery } from "@/feature/admin-post/api/useAdminPostListQuery"

export function useAdminPostListContent() {
    const [page, setPage] = useState(1)
    const { data, isFetching } = useAdminPostListQuery(page)

    return {
        data,
        setPage,
        isFetching,
    }
}