import { PostEditorPreview } from "@/feature/admin-post/components/editor/PostEditorPreview"
import type { PostEditorFormValues } from "@/shared/model/admin-post.types"

type PostEditorPreviewPaneProps = {
    className?: string
    values: PostEditorFormValues
}

export function PostEditorPreviewPane({ className, values }: PostEditorPreviewPaneProps) {
    return (
        <div
            className={`min-h-[50dvh] min-w-0 flex-1 flex-col overflow-hidden bg-gray-50 lg:min-h-0 ${className ?? "flex"}`}
        >
            <PostEditorPreview values={values} />
        </div>
    )
}
