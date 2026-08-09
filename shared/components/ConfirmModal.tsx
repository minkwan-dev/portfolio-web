"use client"

import { useEffect } from "react"

type ConfirmModalProps = {
    open: boolean
    title: string
    description?: string
    confirmLabel?: string
    cancelLabel?: string
    variant?: "default" | "danger"
    isPending?: boolean
    onConfirm: () => void
    onClose: () => void
}

export function ConfirmModal({
    open,
    title,
    description,
    confirmLabel = "확인",
    cancelLabel = "취소",
    variant = "default",
    isPending = false,
    onConfirm,
    onClose,
}: ConfirmModalProps) {
    useEffect(() => {
        if (!open) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [open, onClose])

    if (!open) return null

    const isDanger = variant === "danger"

    return (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/20 px-4">
            <button
                type="button"
                aria-label="닫기"
                className="absolute inset-0"
                onClick={onClose}
            />
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-modal-title"
                className="relative w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl"
            >
                <h2 id="confirm-modal-title" className="text-lg font-semibold text-black">
                    {title}
                </h2>
                {description ? (
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
                ) : null}

                <div className="mt-6 flex justify-end gap-2">
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={onClose}
                        className="rounded-xl px-4 py-2 text-sm text-gray-500 transition-colors hover:text-black disabled:opacity-60"
                    >
                        {cancelLabel}
                    </button>
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={onConfirm}
                        className={`rounded-xl px-4 py-2 text-sm text-white disabled:opacity-60 ${
                            isDanger ? "bg-red-500 hover:bg-red-600" : "bg-black hover:bg-gray-900"
                        }`}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}
