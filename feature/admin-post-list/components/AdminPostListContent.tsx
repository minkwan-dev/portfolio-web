"use client"

import { useAdminPostListQuery } from "@/feature/admin-post-list/api/useAdminPostListQuery"
import { AdminPostListSkeleton } from "@/feature/admin-post-list/components/AdminPostListSkeleton"
import { AdminPostRowActions } from "@/feature/admin-post-list/components/AdminPostRowActions"
import { ErrorFallback } from "@/shared/components/ErrorFallback"

export function AdminPostListContent() {
    const { data, isLoading, isError, error, refetch } = useAdminPostListQuery()

    if (isLoading) return <AdminPostListSkeleton />

    if (isError || !data) {
        return (
            <ErrorFallback
                error={error instanceof Error ? error : new Error("글 목록을 불러오지 못했어요")}
                reset={() => void refetch()}
                variant="section"
                title="어드민 글 목록을 불러오지 못했어요"
            />
        )
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full text-sm">
                <thead className="border-b border-gray-200 bg-gray-50 text-left text-gray-500">
                    <tr>
                        <th className="px-4 py-3">제목</th>
                        <th className="px-4 py-3">상태</th>
                        <th className="px-4 py-3">발행일</th>
                        <th className="px-4 py-3">액션</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((post) => (
                        <tr key={post.id} className="border-b border-gray-100 last:border-0">
                            <td className="px-4 py-3 font-medium">{post.title}</td>
                            <td className="px-4 py-3">
                                {post.isTemp ? "임시" : "발행"}
                                {post.isMain ? " · 메인" : ""}
                            </td>
                            <td className="px-4 py-3 text-gray-500">
                                {post.releasedAt?.slice(0, 10) ?? "-"}
                            </td>
                            <td className="px-4 py-3">
                                <AdminPostRowActions post={post} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
