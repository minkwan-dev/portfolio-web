import { PostEditorLayout } from "@/feature/admin-post-editor/components/PostEditorLayout"
import { PostEditorSection } from "@/feature/admin-post-editor/components/PostEditorSection"
import { AdminPageShell } from "@/shared/components/AdminPageShell"
import { ADMIN_CONTAINER_CLASS } from "@/shared/constants/page-layout"

type AdminPostEditorPageProps = {
    postId?: number
}

export default function AdminPostEditorPage({ postId }: AdminPostEditorPageProps) {
    const isEditMode = typeof postId === "number" && !Number.isNaN(postId)

    return (
        <AdminPageShell active="posts">
            <main className={`flex flex-col gap-8 py-10 ${ADMIN_CONTAINER_CLASS}`}>
                <h1 className="text-2xl font-bold">
                    {isEditMode ? "글 수정" : "새 글 작성"}
                </h1>
                {isEditMode ? <PostEditorSection postId={postId} /> : <PostEditorLayout />}
            </main>
        </AdminPageShell>
    )
}
