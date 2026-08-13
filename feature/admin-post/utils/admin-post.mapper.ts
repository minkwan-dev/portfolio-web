import type {
    AdminPostDetail,
    PostEditorFormValues,
    SavePostInput,
} from "@/shared/model/admin-post.types"

const EMPTY_FORM: PostEditorFormValues = {
    title: "",
    thumbnail: "",
    body: "",
    tags: "",
    isTemp: true,
}

export function toFormValues(post?: AdminPostDetail): PostEditorFormValues {
    if (!post) return EMPTY_FORM

    return {
        title: post.title,
        thumbnail: post.thumbnail ?? "",
        body: post.body,
        tags: post.tags.join(", "),
        isTemp: post.isTemp,
    }
}

export function toSavePostInput(values: PostEditorFormValues, isTemp: boolean): SavePostInput {
    const trimmedTitle = values.title.trim()

    return {
        title: trimmedTitle || (isTemp ? "제목 없음" : ""),
        thumbnail: values.thumbnail.trim() || null,
        body: values.body.trim() || (isTemp ? " " : ""),
        tags: values.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        isTemp,
    }
}
