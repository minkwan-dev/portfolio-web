import { ConfirmModal } from "@/shared/components/ConfirmModal"

type AdminPostDeleteModalProps = {
    open: boolean
    postTitle: string
    isPending: boolean
    onConfirm: () => void
    onClose: () => void
}

export function AdminPostDeleteModal({
    open,
    postTitle,
    isPending,
    onConfirm,
    onClose,
}: AdminPostDeleteModalProps) {
    return (
        <ConfirmModal
            open={open}
            title="글을 삭제할까요?"
            description={`"${postTitle}" 글을 삭제하면 복구할 수 없습니다.`}
            confirmLabel="삭제"
            variant="danger"
            isPending={isPending}
            onConfirm={onConfirm}
            onClose={onClose}
        />
    )
}