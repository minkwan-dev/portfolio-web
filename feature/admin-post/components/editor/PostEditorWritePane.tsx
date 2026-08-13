import { PostEditorPrimaryFields } from "@/feature/admin-post/components/editor/PostEditorPrimaryFields"
import type { PostEditorFormValues } from "@/shared/model/admin-post.types"

type PostEditorWritePaneProps = {
    className?: string
    values: PostEditorFormValues
    updateField: <K extends keyof PostEditorFormValues>(
        key: K,
        value: PostEditorFormValues[K],
    ) => void
}

export function PostEditorWritePane({ className, values, updateField }: PostEditorWritePaneProps) {
    return (
        <div
            className={`min-w-0 flex-1 flex-col bg-white lg:border-r lg:border-gray-200 ${className ?? "flex min-h-0"}`}
        >
            <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-6 sm:px-6 sm:pt-8">
                <PostEditorPrimaryFields values={values} updateField={updateField} />
            </div>
        </div>
    )
}
