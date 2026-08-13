import Link from "next/link"

type PostEditorWriteFooterProps = {
    className?: string
    isPending: boolean
    canDelete: boolean
    onDelete: () => void
    onSaveDraft: () => void
    onPublish: () => void
}

export function PostEditorWriteFooter({
    className,
    isPending,
    canDelete,
    onDelete,
    onSaveDraft,
    onPublish,
}: PostEditorWriteFooterProps) {
    return (
        <footer
            className={`sticky bottom-0 shrink-0 border-t border-gray-200 bg-white/95 px-4 py-3 backdrop-blur sm:px-6 sm:py-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] ${className ?? ""}`}
        >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="flex items-center justify-between gap-4 sm:justify-start">
                    <Link href="/admin/posts" className="text-sm text-gray-500 hover:text-black">
                        ← 나가기
                    </Link>
                    {canDelete && (
                        <button
                            type="button"
                            onClick={onDelete}
                            className="text-sm text-red-500 hover:text-red-600"
                        >
                            삭제
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={onSaveDraft}
                        className="min-h-11 flex-1 rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:border-gray-300 disabled:opacity-60 sm:min-h-0 sm:flex-none sm:border-0 sm:px-0 sm:py-0 sm:text-gray-500 sm:hover:text-black"
                    >
                        임시저장
                    </button>
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={onPublish}
                        className="min-h-11 flex-1 rounded-xl bg-black px-4 py-2 text-sm text-white disabled:opacity-60 sm:min-h-0 sm:flex-none"
                    >
                        출간하기
                    </button>
                </div>
            </div>
        </footer>
    )
}
