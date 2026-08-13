"use client"

import { AdminPostCardList } from "@/feature/admin-post/components/list/AdminPostCardList"
import { AdminPostListPagination } from "@/feature/admin-post/components/list/AdminPostListPagination"
import { AdminPostTable } from "@/feature/admin-post/components/list/AdminPostTable"
import { useAdminPostListContent } from "@/feature/admin-post/hooks/useAdminPostListContent"

export function AdminPostListContent() {
    const { data, isFetching, setPage } = useAdminPostListContent()

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <AdminPostCardList posts={data.data} />
            <AdminPostTable posts={data.data} />
            <AdminPostListPagination
                meta={data.meta}
                onPageChange={setPage}
                isLoading={isFetching}
            />
        </div>
    )
}
