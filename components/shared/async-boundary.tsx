"use client"

import { Suspense, type ReactNode } from "react"
import { ErrorBoundary } from "@/components/shared/error-boundary"
import { ErrorFallback } from "@/components/shared/error-fallback"

type AsyncBoundaryProps = {
    children: ReactNode
    fallback: ReactNode
    errorVariant?: "section" | "compact"
    errorTitle?: string
    errorDescription?: string
    errorFallback?: (props: { error: Error; reset: () => void }) => ReactNode
}

export function AsyncBoundary({
    children,
    fallback,
    errorVariant = "section",
    errorTitle,
    errorDescription,
    errorFallback,
}: AsyncBoundaryProps) {
    return (
        <ErrorBoundary
            fallback={
                errorFallback ??
                ((props) => (
                    <ErrorFallback
                        {...props}
                        variant={errorVariant}
                        title={errorTitle}
                        description={errorDescription}
                    />
                ))
            }
        >
            <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
    )
}
