"use client"

import Link from "next/link"
import {
    useCreateAdminPostMutation,
    useDeleteAdminPostMutation,
    useUpdateAdminPostMutation,
} from "@/feature/admin-post-editor/api/useAdminPostMutations"
import {
    toSavePostInput,
    usePostEditorForm,
} from "@/feature/admin-post-editor/hooks/usePostEditorForm"
import type { AdminPostDetail } from "@/feature/admin-post-editor/model/post-editor.types"

type PostEditorFormProps = {
    post?: AdminPostDetail
}

export function PostEditorForm({ post }: PostEditorFormProps) {
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
            <div className="grid gap-4">
                <input
                    value={values.title}
                    onChange={(e) => updateField("title", e.target.value)}
                    placeholder="제목"
                    className="rounded-xl border border-gray-200 px-4 py-3"
                />
                <input
                    value={values.urlSlug}
                    onChange={(e) => updateField("urlSlug", e.target.value)}
                    placeholder="slug"
                    className="rounded-xl border border-gray-200 px-4 py-3"
                />
                <input
                    value={values.shortDescription}
                    onChange={(e) => updateField("shortDescription", e.target.value)}
                    placeholder="짧은 설명"
                    className="rounded-xl border border-gray-200 px-4 py-3"
                />
                <input
                    value={values.thumbnail}
                    onChange={(e) => updateField("thumbnail", e.target.value)}
                    placeholder="썸네일 URL"
                    className="rounded-xl border border-gray-200 px-4 py-3"
                />
                <input
                    value={values.tags}
                    onChange={(e) => updateField("tags", e.target.value)}
                    placeholder="태그 (쉼표 구분)"
                    className="rounded-xl border border-gray-200 px-4 py-3"
                />
                <textarea
                    value={values.body}
                    onChange={(e) => updateField("body", e.target.value)}
                    placeholder="본문 (Markdown)"
                    rows={20}
                    className="rounded-xl border border-gray-200 px-4 py-3 font-mono text-sm"
                />
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={values.isTemp}
                        onChange={(e) => updateField("isTemp", e.target.checked)}
                    />
                    임시 저장
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={values.isMain}
                        onChange={(e) => updateField("isMain", e.target.checked)}
                    />
                    메인 노출
                </label>
                <input
                    value={values.mainOrder}
                    onChange={(e) => updateField("mainOrder", e.target.value)}
                    placeholder="메인 순서"
                    className="w-28 rounded-xl border border-gray-200 px-3 py-2"
                />
            </div>

            <div className="flex items-center gap-3">
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
