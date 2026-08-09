"use client"

import Image from "next/image"
import { PostMarkdownBody } from "@/feature/blog-detail/components/PostMarkdownBody"
import type { PostEditorFormValues } from "@/feature/admin-post-editor/model/post-editor.types"
import { resolvePostThumbnail } from "@/shared/utils/post-thumbnail"

type PostEditorPreviewProps = {
    values: PostEditorFormValues
}

export function PostEditorPreview({ values }: PostEditorPreviewProps) {
    const thumbnailSrc = resolvePostThumbnail(values.thumbnail || null)
    const isFallback = thumbnailSrc === "/fallback-post.png"
    const tags = values.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)

    return (
        <div className="flex h-full flex-col gap-6">
            <div className="flex flex-col gap-2 border-b border-gray-100 pb-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    미리보기
                </p>
                <h2 className="text-2xl font-bold leading-snug text-black">
                    {values.title.trim() || "제목 없음"}
                </h2>
                {values.shortDescription.trim() ? (
                    <p className="text-sm text-gray-500">{values.shortDescription.trim()}</p>
                ) : null}
                {tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md border border-gray-200 px-2 py-0.5 text-xs text-gray-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>

            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                    src={thumbnailSrc}
                    alt={values.title.trim() || "썸네일 미리보기"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized={!isFallback}
                />
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto pb-2">
                {values.body.trim() ? (
                    <PostMarkdownBody content={values.body} />
                ) : (
                    <p className="text-sm text-gray-400">본문을 입력하면 미리보기가 표시됩니다.</p>
                )}
            </div>
        </div>
    )
}
