import { AdminPostRowActions } from "@/feature/admin-post/components/list/AdminPostRowActions"
import { AdminPostStatusDot } from "@/feature/admin-post/components/list/AdminPostStatusDot"
import type { AdminPostListItem } from "@/shared/model/admin-post.types"

type AdminPostTableRowProps = {
    post: AdminPostListItem
}

export function AdminPostTableRow({ post }: AdminPostTableRowProps) {
    const releasedDate = post.releasedAt?.slice(0, 10) ?? "-"

    return (
        <tr className="border-b border-gray-100 last:border-0">
            <td className="px-4 py-3 font-medium">{post.title}</td>
            <td className="px-4 py-3">
                <AdminPostStatusDot post={post} />
            </td>
            <td className="px-4 py-3 text-gray-500">{releasedDate}</td>
            <td className="px-4 py-3">
                <AdminPostRowActions post={post} />
            </td>
        </tr>
    )
}