"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

type ErrorBoundaryProps = {
    children: ReactNode
    fallback: (props: { error: Error; reset: () => void }) => ReactNode
}

type ErrorBoundaryState = {
    error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { error: null }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { error }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("[ErrorBoundary]", error, info)
    }

    reset = () => {
        this.setState({ error: null })
    }

    render() {
        if (this.state.error) {
            return this.props.fallback({ error: this.state.error, reset: this.reset })
        }

        return this.props.children
    }
}