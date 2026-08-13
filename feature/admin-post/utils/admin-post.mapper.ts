import type {
    AdminPostDetail,
    PostEditorFormValues,
    SavePostInput,
} from "@/shared/model/admin-post.types"
import { generateDraftSlug } from "@/feature/admin-post/utils/generate-draft-slug"

const EMPTY_FORM: PostEditorFormValues = {
    title: "",
    urlSlug: "",
    shortDescription: "",
    thumbnail: "",
    body: "",
    tags: "",
    isTemp: true,
    isMain: false,
    mainOrder: "",
    releasedAt: "",
}

function toDatetimeLocalValue(iso: string | null): string {
    if (!iso) return ""

    const date = new Date(iso)
    if (Number.isNaN(date.getTime())) return ""

    const pad = (value: number) => String(value).padStart(2, "0")

    return (
        [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join("-") +
        `T${pad(date.getHours())}:${pad(date.getMinutes())}`
    )
}

export function toFormValues(post?: AdminPostDetail): PostEditorFormValues {
    if (!post) return EMPTY_FORM

    return {
        title: post.title,
        urlSlug: post.urlSlug,
        shortDescription: post.shortDescription ?? "",
        thumbnail: post.thumbnail ?? "",
        body: post.body,
        tags: post.tags.join(", "),
        isTemp: post.isTemp,
        isMain: post.isMain,
        mainOrder: post.mainOrder?.toString() ?? "",
        releasedAt: toDatetimeLocalValue(post.releasedAt),
    }
}

export function toSavePostInput(values: PostEditorFormValues, isTemp: boolean): SavePostInput {
    const trimmedTitle = values.title.trim()
    const trimmedSlug = values.urlSlug.trim()

    return {
        title: trimmedTitle || (isTemp ? "제목 없음" : ""),
        urlSlug: trimmedSlug || (isTemp ? generateDraftSlug(trimmedTitle) : ""),
        shortDescription: values.shortDescription.trim() || null,
        thumbnail: values.thumbnail.trim() || null,
        body: values.body.trim() || (isTemp ? " " : ""),
        tags: values.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        isTemp,
        isMain: values.isMain,
        mainOrder: values.mainOrder ? Number(values.mainOrder) : null,
        releasedAt: values.releasedAt ? new Date(values.releasedAt).toISOString() : null,
    }
}
