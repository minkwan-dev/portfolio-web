import { AdminPostTableRow } from "@/feature/admin-post/components/list/AdminPostTableRow"
import type { AdminPostListItem } from "@/shared/model/admin-post.types"

type AdminPostTableProps = {
    posts: AdminPostListItem[]
}

export function AdminPostTable({ posts }: AdminPostTableProps) {
    return (
        <div className="hidden md:block">
            <table className="min-w-full text-sm">
                <thead className="border-b border-gray-200 bg-gray-50 text-left text-gray-500">
                    <tr>
                        <th className="px-4 py-3">제목</th>
                        <th className="px-4 py-3">상태</th>
                        <th className="px-4 py-3">발행일</th>
                        <th className="w-24 px-4 py-3">
                            <span className="sr-only">글 관리</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <AdminPostTableRow key={post.id} post={post} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
