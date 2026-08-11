type PostEditorSettingsDeleteButtonProps = {
    onDelete: () => void
}

export function PostEditorSettingsDeleteButton({ onDelete }: PostEditorSettingsDeleteButtonProps) {
    return (
        <div className="border-t border-gray-200 px-6 py-4">
            <button
                type="button"
                onClick={onDelete}
                className="text-sm text-red-500 hover:text-red-600"
            >
                글 삭제
            </button>
        </div>
    )
}
