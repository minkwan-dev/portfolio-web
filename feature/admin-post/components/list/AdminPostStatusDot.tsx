import type { AdminPostListItem } from "@/shared/model/admin-post.types"

type PostStatus = {
    label: "임시" | "발행" | "메인"
    dotClassName: string
}

function resolvePostStatus(post: AdminPostListItem): PostStatus {
    if (post.isTemp) {
        return { label: "임시", dotClassName: "bg-amber-400" }
    }

    if (post.isMain) {
        return { label: "메인", dotClassName: "bg-violet-500" }
    }

    return { label: "발행", dotClassName: "bg-emerald-500" }
}

type AdminPostStatusDotProps = {
    post: AdminPostListItem
}

export function AdminPostStatusDot({ post }: AdminPostStatusDotProps) {
    const status = resolvePostStatus(post)

    return (
        <span className="inline-flex items-center gap-2" title={status.label}>
            <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${status.dotClassName}`}
                aria-hidden="true"
            />
            <span className="text-gray-600">{status.label}</span>
        </span>
    )
}
