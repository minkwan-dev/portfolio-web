"use client"

import { AdminPostListPagination } from "@/feature/admin-post-list/components/AdminPostListPagination"
import { AdminPostListSkeleton } from "@/feature/admin-post-list/components/AdminPostListSkeleton"
import { AdminPostTable } from "@/feature/admin-post-list/components/AdminPostTable"
import { useAdminPostListContent } from "@/feature/admin-post-list/hooks/useAdminPostListContent"
import { ErrorFallback } from "@/shared/components/ErrorFallback"

export function AdminPostListContent() {
    const { data, isLoading, isError, listError, refetch, isFetching, setPage } =
        useAdminPostListContent()

    if (isLoading) {
        return <AdminPostListSkeleton />
    }

    if (isError || !data) {
        return (
            <ErrorFallback
                error={listError}
                reset={() => void refetch()}
                variant="section"
                title="어드민 글 목록을 불러오지 못했어요"
            />
        )
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <AdminPostTable posts={data.data} />
            <AdminPostListPagination
                meta={data.meta}
                onPageChange={setPage}
                isLoading={isFetching}
            />
        </div>
    )
}