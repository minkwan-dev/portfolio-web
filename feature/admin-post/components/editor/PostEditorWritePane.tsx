import { PostEditorPrimaryFields } from "@/feature/admin-post/components/editor/PostEditorPrimaryFields"
import { PostEditorWriteFooter } from "@/feature/admin-post/components/editor/PostEditorWriteFooter"
import type { PostEditorFormValues } from "@/shared/model/admin-post.types"

type PostEditorWritePaneProps = {
    values: PostEditorFormValues
    updateField: <K extends keyof PostEditorFormValues>(
        key: K,
        value: PostEditorFormValues[K],
    ) => void
    isPending: boolean
    canDelete: boolean
    onDelete: () => void
    onSaveDraft: () => void
    onPublish: () => void
}

export function PostEditorWritePane({
    values,
    updateField,
    isPending,
    canDelete,
    onDelete,
    onSaveDraft,
    onPublish,
}: PostEditorWritePaneProps) {
    return (
        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white lg:border-r lg:border-gray-200">
            <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-8">
                <PostEditorPrimaryFields values={values} updateField={updateField} />
            </div>
            <PostEditorWriteFooter
                isPending={isPending}
                canDelete={canDelete}
                onDelete={onDelete}
                onSaveDraft={onSaveDraft}
                onPublish={onPublish}
            />
        </div>
    )
}
