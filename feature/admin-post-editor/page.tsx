import { EditPostEditor } from "@/feature/admin-post-editor/components/EditPostEditor"
import { PostEditor } from "@/feature/admin-post-editor/components/PostEditor"

type AdminPostEditorPageProps = {
    postId?: number
}

export default function AdminPostEditorPage({ postId }: AdminPostEditorPageProps) {
    const isEditMode = typeof postId === "number" && !Number.isNaN(postId)

    return isEditMode ? <EditPostEditor postId={postId} /> : <PostEditor />
}