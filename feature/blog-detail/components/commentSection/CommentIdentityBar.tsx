import type { CommentIdentity } from "@/feature/blog-detail/model/comment.types"

type CommentIdentityBarProps = {
    identity: CommentIdentity | null
    isLoading: boolean
    onRefresh: () => void
}

type CommentAvatarProps = {
    identity: CommentIdentity | null
    isLoading: boolean
}

function CommentAvatar({ identity, isLoading }: CommentAvatarProps) {
    if (isLoading || !identity) {
        return <div className="h-10 w-10 animate-pulse rounded-full bg-gray-100" />
    }

    return (
        <img
            src={identity.avatar}
            alt=""
            className="h-10 w-10 rounded-full border border-gray-200 bg-gray-50"
        />
    )
}

export function CommentIdentityBar({ identity, isLoading, onRefresh }: CommentIdentityBarProps) {
    const nickname = identity?.nickname ?? "프로필 준비 중…"

    return (
        <div className="flex items-center gap-3">
            <CommentAvatar identity={identity} isLoading={isLoading} />
            <span className="text-sm font-medium text-gray-800">{nickname}</span>
            <button
                type="button"
                onClick={onRefresh}
                disabled={isLoading}
                className="ml-auto text-sm text-gray-500 underline-offset-2 hover:underline disabled:opacity-50"
            >
                랜덤 변경
            </button>
        </div>
    )
}