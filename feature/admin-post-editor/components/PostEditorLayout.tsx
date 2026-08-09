"use client"

import Link from "next/link"
import {
    useCreateAdminPostMutation,
    useDeleteAdminPostMutation,
    useUpdateAdminPostMutation,
} from "@/feature/admin-post-editor/api/useAdminPostMutations"
import { PostEditorFields } from "@/feature/admin-post-editor/components/PostEditorFields"
import { PostEditorPreview } from "@/feature/admin-post-editor/components/PostEditorPreview"
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

    const handleSubmit = () => {
        const input = toSavePostInput(values)
        if (post) {
            updateMutation.mutate(input)
            return
        }
        createMutation.mutate(input)
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
                <PostEditorFields values={values} updateField={updateField} />

                <div className="xl:sticky xl:top-6 xl:self-start">
                    <div className="flex h-[calc(100vh-12rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
                        <PostEditorPreview values={values} />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <button
                    type="button"
                    disabled={isPending}
                    onClick={handleSubmit}
                    className="rounded-xl bg-black px-4 py-2 text-sm text-white disabled:opacity-60"
                >
                    {post ? "저장" : "생성"}
                </button>
                <Link href="/admin/posts" className="text-sm text-gray-500 hover:text-black">
                    목록
                </Link>
                {post ? (
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={() => {
                            if (confirm("정말 삭제할까요?")) deleteMutation.mutate()
                        }}
                        className="ml-auto text-sm text-red-500 hover:text-red-600 disabled:opacity-60"
                    >
                        삭제
                    </button>
                ) : null}
            </div>
        </div>
    )
}
