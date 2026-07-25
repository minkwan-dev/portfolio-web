"use client"

type ErrorFallbackProps = {
    error: Error
    reset: () => void
}

export function ErrorFallback({ error, reset }: ErrorFallbackProps) {
    return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-6 py-8 text-center">
        <p className="text-sm text-red-700">{error.message || "데이터를 불러오지 못했습니다."}</p>
        <button
        type="button"
        onClick={reset}
        className="rounded-lg border border-red-300 px-4 py-2 text-sm text-red-700 hover:bg-red-100"
        >
            다시 시도
        </button>
    </div>
    )
}