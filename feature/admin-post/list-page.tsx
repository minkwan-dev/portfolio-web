import Link from "next/link"
import { AdminPostList } from "@/feature/admin-post/components/list/AdminPostList"
import { AdminPageShell } from "@/shared/components/AdminPageShell"

export default function AdminPostListPage() {
    return (
        <AdminPageShell>
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">? ??</h1>
                    <Link
                        href="/admin/posts/new"
                        className="rounded-xl bg-black px-4 py-2 text-sm text-white"
                    >
                        ? ? ??
                    </Link>
                </div>
                <AdminPostList />
            </main>
        </AdminPageShell>
    )
}
