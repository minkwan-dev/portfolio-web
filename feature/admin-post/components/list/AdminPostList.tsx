"use client"

import { AdminPostListContent } from "@/feature/admin-post/components/list/AdminPostListContent"
import { AdminPostListSkeleton } from "@/feature/admin-post/components/list/AdminPostListSkeleton"
import { AsyncBoundary } from "@/shared/components/AsyncBoundary"

export function AdminPostList() {
    return (
        <AsyncBoundary
            fallback={<AdminPostListSkeleton />}
            errorTitle="어드민 글 목록을 불러오지 못했어요"
        >
            <AdminPostListContent />
        </AsyncBoundary>
    )
}
