import Link from "next/link"

type PostEditorWriteFooterProps = {
    isPending: boolean
    canDelete: boolean
    onDelete: () => void
    onSaveDraft: () => void
    onPublish: () => void
}

export function PostEditorWriteFooter({
    isPending,
    canDelete,
    onDelete,
    onSaveDraft,
    onPublish,
}: PostEditorWriteFooterProps) {
    return (
        <footer className="shrink-0 border-t border-gray-200 bg-white px-6 py-4">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
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

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={onSaveDraft}
                        className="text-sm text-gray-500 hover:text-black disabled:opacity-60"
                    >
                        임시저장
                    </button>
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={onPublish}
                        className="rounded-xl bg-black px-4 py-2 text-sm text-white disabled:opacity-60"
                    >
                        출간하기
                    </button>
                </div>
            </div>
        </footer>
    )
}
