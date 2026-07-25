"use client"

import { Suspense, type ReactNode } from "react"
import { ErrorBoundary } from "@/components/shared/error-boundary"
import { ErrorFallback } from "@/components/shared/error-fallback"

type AsyncBoundaryProps = {
    children: ReactNode
    fallback: ReactNode
    errorFallback?: (props: { error: Error; reset: () => void }) => ReactNode
}

export function AsyncBoundary({ children, fallback, errorFallback }: AsyncBoundaryProps) {
    return (
    <ErrorBoundary fallback={errorFallback ?? ((props) => <ErrorFallback {...props} />)}>
        <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
    )
}