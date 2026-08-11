"use client"

import { CommentIdentityBar } from "@/feature/blog-detail/components/commentSection/CommentIdentityBar"
import { useCommentForm } from "@/feature/blog-detail/hooks/useCommentForm"

type CommentFormProps = {
    postSlug: string
}

export function CommentForm({ postSlug }: CommentFormProps) {
    const {
        identity,
        body,
        setBody,
        refresh,
        isIdentityLoading,
        handleSubmit,
        canSubmit,
    } = useCommentForm(postSlug)

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-4">
            <CommentIdentityBar
                identity={identity}
                isLoading={isIdentityLoading}
                onRefresh={refresh}
            />

            <textarea
                value={body}
                onChange={(event) => setBody(event.target.value)}
                placeholder="입력한 댓글은 수정하거나 삭제할 수 없어요. 또한 허위사실, 욕설, 사칭 등 댓글은 통보없이 삭제될 수 있습니다."
                rows={4}
                className="w-full resize-none rounded-xl border border-gray-200 p-3 text-sm outline-none focus:border-gray-400"
            />

            <button
                type="submit"
                disabled={!canSubmit}
                className="self-end rounded-lg bg-black px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-gray-300"
            >
                댓글 남기기
            </button>
        </form>
    )
}