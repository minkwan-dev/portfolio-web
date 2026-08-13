import type { PostEditorFormValues } from "@/shared/model/admin-post.types"

export function validateForPublish(values: PostEditorFormValues): string | null {
    if (!values.title.trim()) {
        return "제목을 입력해 주세요."
    }

    if (!values.urlSlug.trim()) {
        return "설정에서 slug를 입력해 주세요."
    }

    if (!values.body.trim()) {
        return "본문을 입력해 주세요."
    }

    return null
}
