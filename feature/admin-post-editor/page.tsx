import { PostEditorLayout } from "@/feature/admin-post-editor/components/PostEditorLayout"
import { PostEditorSection } from "@/feature/admin-post-editor/components/PostEditorSection"
import { PostEditorShell } from "@/feature/admin-post-editor/components/PostEditorShell"

type AdminPostEditorPageProps = {
    postId?: number
}

export default function AdminPostEditorPage({ postId }: AdminPostEditorPageProps) {
    const isEditMode = typeof postId === "number" && !Number.isNaN(postId)

    return (
        <PostEditorShell>
            {isEditMode ? <PostEditorSection postId={postId} /> : <PostEditorLayout />}
        </PostEditorShell>
    )
}
