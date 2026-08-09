"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export type ToastVariant = "success" | "error"

export type ToastItem = {
    id: string
    message: string
    variant: ToastVariant
}

type ToastProps = {
    toast: ToastItem
    onDismiss: (id: string) => void
    durationMs?: number
}

export function Toast({ toast, onDismiss, durationMs = 3000 }: ToastProps) {
    const [progress, setProgress] = useState(100)

    useEffect(() => {
        const startedAt = Date.now()

        const intervalId = window.setInterval(() => {
            const elapsed = Date.now() - startedAt
            const remaining = Math.max(0, 100 - (elapsed / durationMs) * 100)
            setProgress(remaining)

            if (remaining <= 0) {
                window.clearInterval(intervalId)
                onDismiss(toast.id)
            }
        }, 50)

        return () => window.clearInterval(intervalId)
    }, [durationMs, onDismiss, toast.id])

    const isError = toast.variant === "error"

    return (
        <div
            role="status"
            className={`relative w-full max-w-sm overflow-hidden rounded-xl border px-4 py-3 text-sm shadow-lg ${
                isError
                    ? "border-red-200 bg-white text-red-600"
                    : "border-gray-200 bg-white text-black"
            }`}
        >
            <div className="flex items-start justify-between gap-3">
                <p className="leading-relaxed">{toast.message}</p>
                <button
                    type="button"
                    aria-label="닫기"
                    onClick={() => onDismiss(toast.id)}
                    className={`shrink-0 rounded-md p-0.5 transition-colors ${
                        isError
                            ? "text-red-400 hover:text-red-600"
                            : "text-gray-400 hover:text-black"
                    }`}
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
            <div
                className={`absolute inset-x-0 bottom-0 h-0.5 ${
                    isError ? "bg-red-100" : "bg-gray-100"
                }`}
            >
                <div
                    className={`h-full transition-[width] duration-75 ease-linear ${
                        isError ? "bg-red-400" : "bg-black"
                    }`}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}
