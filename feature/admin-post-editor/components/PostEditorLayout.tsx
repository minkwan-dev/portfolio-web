"use client"

import {
    useCreateAdminPostMutation,
    useDeleteAdminPostMutation,
    useUpdateAdminPostMutation,
} from "@/feature/admin-post-editor/api/useAdminPostMutations"
import { PostEditorFields } from "@/feature/admin-post-editor/components/PostEditorFields"
import { PostEditorPreview } from "@/feature/admin-post-editor/components/PostEditorPreview"
import { PostEditorShell } from "@/feature/admin-post-editor/components/PostEditorShell"
import { PostEditorWriteFooter } from "@/feature/admin-post-editor/components/PostEditorWriteFooter"
import { PostEditorFormProvider } from "@/feature/admin-post-editor/context/PostEditorFormContext"
import {
    toSavePostInput,
    usePostEditorForm,
} from "@/feature/admin-post-editor/hooks/usePostEditorForm"
import type { AdminPostDetail } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorLayoutProps = {
    post?: AdminPostDetail
}

export function PostEditorLayout({ post }: PostEditorLayoutProps) {
    const { values, updateField } = usePostEditorForm(post)
    const createMutation = useCreateAdminPostMutation()
    const updateMutation = useUpdateAdminPostMutation(post?.id ?? 0)
    const deleteMutation = useDeleteAdminPostMutation(post?.id ?? 0)

    const isPending =
        createMutation.isPending || updateMutation.isPending || deleteMutation.isPending

    const handleSave = (isTemp: boolean) => {
        const input = toSavePostInput(values, isTemp)
        if (post) {
            updateMutation.mutate(input)
            return
        }
        createMutation.mutate(input)
    }

    const handleDelete = () => {
        if (confirm("정말 삭제할까요?")) {
            deleteMutation.mutate()
        }
    }

    return (
        <PostEditorFormProvider values={values} updateField={updateField}>
            <PostEditorShell onDelete={post ? handleDelete : undefined}>
                <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
                    <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white lg:border-r lg:border-gray-200">
                        <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-8">
                            <PostEditorFields values={values} updateField={updateField} />
                        </div>
                        <PostEditorWriteFooter
                            isPending={isPending}
                            onSaveDraft={() => handleSave(true)}
                            onPublish={() => handleSave(false)}
                        />
                    </div>

                    <div className="flex min-h-[24rem] min-w-0 flex-1 flex-col overflow-hidden bg-gray-50 lg:min-h-0">
                        <PostEditorPreview values={values} />
                    </div>
                </div>
            </PostEditorShell>
        </PostEditorFormProvider>
    )
}
