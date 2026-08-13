import { ConfirmModal } from "@/shared/components/ConfirmModal"

type PostEditorDeleteModalProps = {
    open: boolean
    isPending: boolean
    onConfirm: () => void
    onClose: () => void
}

export function PostEditorDeleteModal({
    open,
    isPending,
    onConfirm,
    onClose,
}: PostEditorDeleteModalProps) {
    return (
        <ConfirmModal
            open={open}
            title="글을 삭제할까요?"
            description="삭제한 글은 복구할 수 없습니다."
            confirmLabel="삭제"
            variant="danger"
            isPending={isPending}
            onConfirm={onConfirm}
            onClose={onClose}
        />
    )
}
