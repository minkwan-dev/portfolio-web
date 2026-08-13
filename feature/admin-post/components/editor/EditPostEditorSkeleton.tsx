import { PostEditorShell } from "@/feature/admin-post/components/editor/PostEditorShell"

export function EditPostEditorSkeleton() {
    return (
        <PostEditorShell>
            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
                <div className="min-h-0 flex-1 animate-pulse bg-gray-100" />
                <div className="min-h-[24rem] flex-1 animate-pulse bg-gray-200 lg:min-h-0" />
            </div>
        </PostEditorShell>
    )
}