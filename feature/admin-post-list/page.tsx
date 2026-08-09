import { AdminPageShell } from "@/shared/components/AdminPageShell"

export default function AdminPostListPage() {
    return (
        <AdminPageShell active="posts">
            <main className="mx-auto max-w-6xl px-6 py-10">
                <h1 className="text-2xl font-bold">글 관리</h1>
            </main>
        </AdminPageShell>
    )
}
