"use client"

import type { AdminPostsPaginationMeta } from "@/shared/model/admin-post.types"

type AdminPostListPaginationProps = {
    meta: AdminPostsPaginationMeta
    onPageChange: (page: number) => void
    isLoading?: boolean
}

export function AdminPostListPagination({
    meta,
    onPageChange,
    isLoading,
}: AdminPostListPaginationProps) {
    if (meta.totalPages <= 1) return null

    return (
        <div className="flex flex-col gap-3 border-t border-gray-100 px-4 py-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <span>
                총 {meta.total}개 · {meta.page}/{meta.totalPages}페이지
            </span>
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    disabled={isLoading || meta.page <= 1}
                    onClick={() => onPageChange(meta.page - 1)}
                    className="min-h-10 flex-1 rounded-lg border border-gray-200 px-3 py-1.5 disabled:opacity-50 sm:min-h-0 sm:flex-none"
                >
                    이전
                </button>
                <button
                    type="button"
                    disabled={isLoading || !meta.hasNextPage}
                    onClick={() => onPageChange(meta.page + 1)}
                    className="min-h-10 flex-1 rounded-lg border border-gray-200 px-3 py-1.5 disabled:opacity-50 sm:min-h-0 sm:flex-none"
                >
                    다음
                </button>
            </div>
        </div>
    )
}
