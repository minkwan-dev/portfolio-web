import { ConfirmModal } from "@/shared/components/ConfirmModal"

type PostEditorPublishModalProps = {
    open: boolean
    isPending: boolean
    onConfirm: () => void
    onClose: () => void
}

export function PostEditorPublishModal({
    open,
    isPending,
    onConfirm,
    onClose,
}: PostEditorPublishModalProps) {
    return (
        <ConfirmModal
            open={open}
            title="글을 출간할까요?"
            description="출간하면 블로그에 공개됩니다."
            confirmLabel="출간하기"
            isPending={isPending}
            onConfirm={onConfirm}
            onClose={onClose}
        />
    )
}
