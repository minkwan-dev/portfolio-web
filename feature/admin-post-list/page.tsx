import Link from "next/link"
import { AdminPostList } from "@/feature/admin-post-list/components/AdminPostList"
import { AdminPageShell } from "@/shared/components/AdminPageShell"
import { ADMIN_CONTAINER_CLASS } from "@/shared/constants/page-layout"

export default function AdminPostListPage() {
    return (
        <AdminPageShell>
            <main className={`flex flex-col gap-8 py-10 ${ADMIN_CONTAINER_CLASS}`}>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">글 관리</h1>
                    <Link
                        href="/admin/posts/new"
                        className="rounded-xl bg-black px-4 py-2 text-sm text-white"
                    >
                        새 글 작성
                    </Link>
                </div>
                <AdminPostList />
            </main>
        </AdminPageShell>
    )
}
