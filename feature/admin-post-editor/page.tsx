import { AdminPageShell } from "@/shared/components/AdminPageShell"
import { PostEditorForm } from "@/feature/admin-post-editor/components/PostEditorForm"
import { PostEditorSection } from "@/feature/admin-post-editor/components/PostEditorSection"

type AdminPostEditorPageProps = {
    postId?: number
}

export default function AdminPostEditorPage({ postId }: AdminPostEditorPageProps) {
    const isEditMode = typeof postId === "number" && !Number.isNaN(postId)

    return (
        <AdminPageShell active="posts">
            <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-10">
                <h1 className="text-2xl font-bold">
                    {isEditMode ? "글 수정" : "새 글 작성"}
                </h1>
                {isEditMode ? <PostEditorSection postId={postId} /> : <PostEditorForm />}
            </main>
        </AdminPageShell>
    )
}
