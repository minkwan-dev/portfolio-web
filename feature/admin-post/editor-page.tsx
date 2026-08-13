import { EditPostEditor } from "@/feature/admin-post/components/editor/EditPostEditor"
import { PostEditor } from "@/feature/admin-post/components/editor/PostEditor"

type AdminPostEditorPageProps = {
    postId?: number
}

export default function AdminPostEditorPage({ postId }: AdminPostEditorPageProps) {
    const isEditMode = typeof postId === "number" && !Number.isNaN(postId)

    return isEditMode 
        ? <EditPostEditor postId={postId} /> 
        : <PostEditor />
}