export function AdminPostListSkeleton() {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="flex flex-col">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-100 px-4 py-4 last:border-0 md:px-4 md:py-3"
                    >
                        <div className="h-5 w-3/4 max-w-sm animate-pulse rounded bg-gray-200" />
                        <div className="mt-3 h-4 w-32 animate-pulse rounded bg-gray-100" />
                    </div>
                ))}
            </div>
        </div>
    )
}
