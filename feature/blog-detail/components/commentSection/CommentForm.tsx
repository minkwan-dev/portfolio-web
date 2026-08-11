"use client"

import { SubmitEvent, useState } from "react"
import { useCreateCommentMutation } from "@/feature/blog-detail/api/useCommentsQuery"
import { useCommentIdentity } from "@/feature/blog-detail/hooks/useCommentIdentity"

type CommentFormProps = {
    postSlug: string
}

export function CommentForm({ postSlug }: CommentFormProps) {
    const { identity, refresh, isLoading: isIdentityLoading } = useCommentIdentity()
    const mutation = useCreateCommentMutation(postSlug)
    const [body, setBody] = useState("")

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!identity || !body.trim()) return

        mutation.mutate({
            body: body.trim(),
            nickname: identity.nickname,
            avatar: identity.avatar,
        })

        setBody("")
    }

    const canSubmit = Boolean(identity && body.trim() && !mutation.isPending)

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center gap-3">
                {identity ? (
                    <img
                        src={identity.avatar}
                        alt=""
                        className="h-10 w-10 rounded-full border border-gray-200 bg-gray-50"
                    />
                ) : (
                    <div className="h-10 w-10 animate-pulse rounded-full bg-gray-100" />
                )}
                <span className="text-sm font-medium text-gray-800">
                    {identity?.nickname ?? "프로필 준비 중…"}
                </span>
                <button
                    type="button"
                    onClick={() => refresh()}
                    disabled={isIdentityLoading}
                    className="ml-auto text-sm text-gray-500 underline-offset-2 hover:underline disabled:opacity-50"
                >
                    랜덤 변경
                </button>
            </div>

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
