import { CommentListSkeleton } from "@/feature/blog-detail/components/comments/CommentListSkeleton"

export function CommentSectionSkeleton() {
    return (
        <div className="flex flex-col gap-6">
            <div className="h-7 w-20 animate-pulse rounded bg-gray-100" />
            <CommentListSkeleton />
        </div>
    )
}
