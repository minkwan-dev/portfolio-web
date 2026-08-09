import { AdminPageShell } from "@/shared/components/AdminPageShell"

type AdminPostEditorPageProps = {
    postId?: number
}

export default function AdminPostEditorPage({ postId }: AdminPostEditorPageProps) {
    return (
        <AdminPageShell active="posts">
            <main className="mx-auto max-w-6xl px-6 py-10">
                <h1 className="text-2xl font-bold">
                    {postId ? "글 수정" : "새 글 작성"}
                </h1>
            </main>
        </AdminPageShell>
    )
}
