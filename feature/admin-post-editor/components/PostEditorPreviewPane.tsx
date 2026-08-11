import { PostEditorPreview } from "@/feature/admin-post-editor/components/PostEditorPreview"
import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorPreviewPaneProps = {
    values: PostEditorFormValues
}

export function PostEditorPreviewPane({ values }: PostEditorPreviewPaneProps) {
    return (
        <div className="flex min-h-[24rem] min-w-0 flex-1 flex-col overflow-hidden bg-gray-50 lg:min-h-0">
            <PostEditorPreview values={values} />
        </div>
    )
}
