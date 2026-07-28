"use client"

import { Suspense, type ReactNode } from "react"
import { ErrorBoundary } from "@/components/shared/error-boundary"
import { ErrorFallback } from "@/components/shared/error-fallback"

type AsyncBoundaryProps = {
    children: ReactNode
    fallback: ReactNode
    errorVariant?: "alert" | "inline"
    errorFallback?: (props: { error: Error; reset: () => void }) => ReactNode
}

export function AsyncBoundary({
    children,
    fallback,
    errorVariant = "alert",
    errorFallback,
}: AsyncBoundaryProps) {
    return (
        <ErrorBoundary
            fallback={
                errorFallback ??
                ((props) => <ErrorFallback {...props} variant={errorVariant} />)
            }
        >
            <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
    )
}