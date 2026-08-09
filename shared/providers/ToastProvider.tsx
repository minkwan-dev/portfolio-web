"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { Toast, type ToastItem, type ToastVariant } from "@/shared/components/Toast"

type ShowToastInput = {
    message: string
    variant?: ToastVariant
}

type ToastContextValue = {
    showToast: (input: ShowToastInput) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<ToastItem[]>([])

    const dismissToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, [])

    const showToast = useCallback(({ message, variant = "success" }: ShowToastInput) => {
        const id = crypto.randomUUID()
        setToasts((prev) => [...prev, { id, message, variant }])
    }, [])

    const value = useMemo(() => ({ showToast }), [showToast])

    return (
        <ToastContext.Provider value={value}>
            {children}
            <div className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-end gap-2 px-4 sm:px-6">
                {toasts.map((toast) => (
                    <div key={toast.id} className="pointer-events-auto w-full max-w-sm">
                        <Toast toast={toast} onDismiss={dismissToast} />
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export function useToast() {
    const context = useContext(ToastContext)

    if (!context) {
        throw new Error("useToast must be used within ToastProvider")
    }

    return context
}
