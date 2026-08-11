type PostListLoadMoreButtonProps = {
    onClick: () => void
    isLoading: boolean
}

export function PostListLoadMoreButton({ onClick, isLoading }: PostListLoadMoreButtonProps) {
    return (
        <div className="flex justify-center">
            <button
                type="button"
                onClick={onClick}
                disabled={isLoading}
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isLoading ? "불러오는 중..." : "더 보기"}
            </button>
        </div>
    )
}
