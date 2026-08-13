const fs = require("fs")
const path = require("path")

const root = path.join(__dirname, "..", "feature", "admin-post")

const primaryFieldsPath = path.join(
    root,
    "components",
    "editor",
    "PostEditorPrimaryFields.tsx",
)

const mapperPath = path.join(root, "utils", "admin-post.mapper.ts")

const S = {
    uploadFail: "\uC378\uB124\uC77C \uC5C5\uB85C\uB4DC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",
    titlePlaceholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",
    thumbnailAlt: "\uC378\uB124\uC77C \uBBF8\uB9AC\uBCF4\uAE30",
    thumbnail: "\uC378\uB124\uC77C",
    uploading: "\uC5C5\uB85C\uB4DC \uC911...",
    thumbnailUpload: "\uC378\uB124\uC77C \uC5C5\uB85C\uB4DC",
    remove: "\uC81C\uAC70",
    tagsPlaceholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 (\uC27C\uD45C \uAD6C\uBD84)",
    bodyPlaceholder: "\uBCF8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694 (Markdown)",
    emptyTitle: "\uC81C\uBAA9 \uC5C6\uC74C",
}

const primaryFields = `"use client"

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
            showToast({ message: "${S.uploadFail}", variant: "error" })
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className="flex flex-col">
            <input
                value={values.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="${S.titlePlaceholder}"
                className="w-full border-0 bg-transparent pb-4 text-2xl font-bold tracking-tight outline-none placeholder:text-gray-300 sm:text-3xl"
            />

            <div className="border-b border-gray-200 py-3">
                <div className="flex items-center gap-3">
                    {values.thumbnail ? (
                        <img
                            src={values.thumbnail}
                            alt="${S.thumbnailAlt}"
                            className="h-16 w-24 rounded-lg object-cover"
                        />
                    ) : (
                        <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                            ${S.thumbnail}
                        </div>
                    )}
                    <div className="flex flex-col gap-2">
                        <button
                            type="button"
                            disabled={isUploading}
                            onClick={() => fileInputRef.current?.click()}
                            className="min-h-11 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:border-gray-300 disabled:opacity-60"
                        >
                            {isUploading ? "${S.uploading}" : "${S.thumbnailUpload}"}
                        </button>
                        {values.thumbnail && (
                            <button
                                type="button"
                                onClick={() => updateField("thumbnail", "")}
                                className="text-left text-xs text-gray-400 hover:text-gray-600"
                            >
                                ${S.remove}
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
                        placeholder="${S.tagsPlaceholder}"
                        className="flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />
                </div>
                <PostEditorTagList tags={tags} />
            </div>

            <textarea
                value={values.body}
                onChange={(e) => updateField("body", e.target.value)}
                placeholder="${S.bodyPlaceholder}"
                className="min-h-[50dvh] w-full resize-none border-0 bg-transparent py-6 font-mono text-sm leading-relaxed outline-none placeholder:text-gray-400 lg:min-h-[calc(100dvh-16rem)]"
            />
        </div>
    )
}
`

fs.writeFileSync(primaryFieldsPath, primaryFields, { encoding: "utf8" })

let mapper = fs.readFileSync(mapperPath, "utf8")
mapper = mapper.replace(
    /title: trimmedTitle \|\| \(isTemp \? .+ : ""\)/,
    `title: trimmedTitle || (isTemp ? "${S.emptyTitle}" : "")`,
)
fs.writeFileSync(mapperPath, mapper, { encoding: "utf8" })

console.log("Fixed:", primaryFieldsPath)
console.log("Fixed:", mapperPath)
