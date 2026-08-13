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
        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 text-sm text-gray-500">
            <span>
                총 {meta.total}개 · {meta.page}/{meta.totalPages}페이지
            </span>
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    disabled={isLoading || meta.page <= 1}
                    onClick={() => onPageChange(meta.page - 1)}
                    className="rounded-lg border border-gray-200 px-3 py-1.5 disabled:opacity-50"
                >
                    이전
                </button>
                <button
                    type="button"
                    disabled={isLoading || !meta.hasNextPage}
                    onClick={() => onPageChange(meta.page + 1)}
                    className="rounded-lg border border-gray-200 px-3 py-1.5 disabled:opacity-50"
                >
                    다음
                </button>
            </div>
        </div>
    )
}
