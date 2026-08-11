"use client"

import { AdminPostListPagination } from "@/feature/admin-post-list/components/AdminPostListPagination"
import { AdminPostTable } from "@/feature/admin-post-list/components/AdminPostTable"
import { useAdminPostListContent } from "@/feature/admin-post-list/hooks/useAdminPostListContent"

export function AdminPostListContent() {
    const { data, isFetching, setPage } = useAdminPostListContent()

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