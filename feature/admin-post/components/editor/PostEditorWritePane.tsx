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
    onOpenSettings: () => void
    onSaveDraft: () => void
    onPublish: () => void
}

export function PostEditorWritePane({
    values,
    updateField,
    isPending,
    onOpenSettings,
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
                onOpenSettings={onOpenSettings}
                onSaveDraft={onSaveDraft}
                onPublish={onPublish}
            />
        </div>
    )
}
