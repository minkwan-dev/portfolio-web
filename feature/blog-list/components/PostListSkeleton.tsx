export function PostListSkeleton() {
    return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
            <div
                key={index}
                className="h-[260px] animate-pulse rounded-2xl border border-gray-200 bg-gray-100"
            />
        ))}
    </div>
    )
}
