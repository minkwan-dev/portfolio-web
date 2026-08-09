import Link from "next/link"

type PostEditorFooterProps = {
    isEditMode: boolean
    isPending: boolean
    onSubmit: () => void
    onDelete?: () => void
}

export function PostEditorFooter({
    isEditMode,
    isPending,
    onSubmit,
    onDelete,
}: PostEditorFooterProps) {
    return (
        <footer className="shrink-0 border-t border-gray-200 bg-white px-6 py-4">
            <div className="flex items-center justify-between gap-4">
                <Link href="/admin/posts" className="text-sm text-gray-500 hover:text-black">
                    ← 나가기
                </Link>

                <div className="flex items-center gap-3">
                    {onDelete ? (
                        <button
                            type="button"
                            disabled={isPending}
                            onClick={onDelete}
                            className="text-sm text-red-500 hover:text-red-600 disabled:opacity-60"
                        >
                            삭제
                        </button>
                    ) : null}
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={onSubmit}
                        className="rounded-xl bg-black px-4 py-2 text-sm text-white disabled:opacity-60"
                    >
                        {isEditMode ? "저장" : "생성"}
                    </button>
                </div>
            </div>
        </footer>
    )
}
