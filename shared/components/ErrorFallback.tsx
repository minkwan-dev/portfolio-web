"use client"

type ErrorFallbackProps = {
    error: Error
    reset: () => void
    variant?: "section" | "compact"
    title?: string
    description?: string
}

function RefreshIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M3 21v-5h5" />
        </svg>
    )
}

export function ErrorFallback({
    error,
    reset,
    variant = "section",
    title,
    description,
}: ErrorFallbackProps) {
    if (process.env.NODE_ENV === "development") {
        console.error("[ErrorFallback]", error)
    }

    const resolvedTitle = title ?? "불러오지 못했어요"
    const resolvedDescription = description ?? "잠시 후 다시 시도해 주세요."

    if (variant === "compact") {
        return (
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400">
                    <RefreshIcon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-gray-800">{resolvedTitle}</p>
                <button
                    type="button"
                    onClick={reset}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
                >
                    다시 시도
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-gray-50/30 px-6 py-16 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400">
                <RefreshIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-800">{resolvedTitle}</p>
                <p className="text-sm text-gray-400">{resolvedDescription}</p>
            </div>
            <button
                type="button"
                onClick={reset}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
                다시 시도
            </button>
        </div>
    )
}