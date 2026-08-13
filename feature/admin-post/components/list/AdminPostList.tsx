"use client"

import { AdminPostListContent } from "@/feature/admin-post/components/list/AdminPostListContent"
import { AdminPostListSkeleton } from "@/feature/admin-post/components/list/AdminPostListSkeleton"
import { AsyncBoundary } from "@/shared/components/AsyncBoundary"

export function AdminPostList() {
    return (
        <AsyncBoundary
            fallback={<AdminPostListSkeleton />}
            errorTitle="??? ? ??? ???? ????"
        >
            <AdminPostListContent />
        </AsyncBoundary>
    )
}
