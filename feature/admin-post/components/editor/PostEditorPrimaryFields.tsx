"use client"

import { useRef, useState } from "react"
import { PostEditorTagList } from "@/feature/admin-post/components/editor/PostEditorTagList"
import { parseEditorTags } from "@/feature/admin-post/utils/parse-editor-tags"
import { uploadAdminImage } from "@/shared/api/adminUploadApi"
import type { PostEditorFormValues } from "@/shared/model/admin-post.types"
import { useToast } from "@/shared/providers/ToastProvider"

type PostEditorFieldUpdater = <K extends keyof PostEditorFormValues>(
    key: K,
    value: PostEditorFormValues[K],
) => void

type PostEditorPrimaryFieldsProps = {
    values: PostEditorFormValues
    updateField: PostEditorFieldUpdater
}

export function PostEditorPrimaryFields({ values, updateField }: PostEditorPrimaryFieldsProps) {
    const { showToast } = useToast()
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isUploading, setIsUploading] = useState(false)
    const tags = parseEditorTags(values.tags)

    const handleThumbnailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        event.target.value = ""

        if (!file) return

        setIsUploading(true)
        try {
            const url = await uploadAdminImage(file)
            updateField("thumbnail", url)
        } catch {
            showToast({ message: "썸네일 업로드에 실패했습니다.", variant: "error" })
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className="flex flex-col">
            <input
                value={values.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="제목을 입력하세요"
                className="w-full border-0 bg-transparent pb-4 text-3xl font-bold tracking-tight outline-none placeholder:text-gray-300"
            />

            <div className="border-b border-gray-200 py-3">
                <div className="flex items-center gap-3">
                    {values.thumbnail ? (
                        <img
                            src={values.thumbnail}
                            alt="썸네일 미리보기"
                            className="h-16 w-24 rounded-lg object-cover"
                        />
                    ) : (
                        <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                            썸네일
                        </div>
                    )}
                    <div className="flex flex-col gap-2">
                        <button
                            type="button"
                            disabled={isUploading}
                            onClick={() => fileInputRef.current?.click()}
                            className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:border-gray-300 disabled:opacity-60"
                        >
                            {isUploading ? "업로드 중..." : "썸네일 업로드"}
                        </button>
                        {values.thumbnail && (
                            <button
                                type="button"
                                onClick={() => updateField("thumbnail", "")}
                                className="text-left text-xs text-gray-400 hover:text-gray-600"
                            >
                                제거
                            </button>
                        )}
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleThumbnailChange}
                    />
                </div>
            </div>

            <div className="border-b border-gray-200 py-3">
                <div className="flex items-center gap-2">
                    <span className="shrink-0 text-sm text-gray-400">#</span>
                    <input
                        value={values.tags}
                        onChange={(e) => updateField("tags", e.target.value)}
                        placeholder="태그를 입력하세요 (쉼표 구분)"
                        className="flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />
                </div>
                <PostEditorTagList tags={tags} />
            </div>

            <textarea
                value={values.body}
                onChange={(e) => updateField("body", e.target.value)}
                placeholder="본문을 입력하세요 (Markdown)"
                className="min-h-[calc(100vh-16rem)] w-full resize-none border-0 bg-transparent py-6 font-mono text-sm leading-relaxed outline-none placeholder:text-gray-400"
            />
        </div>
    )
}
