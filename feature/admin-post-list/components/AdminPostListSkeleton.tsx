export function AdminPostListSkeleton() {
    return (
        <div className="flex flex-col gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-14 animate-pulse rounded-xl bg-gray-200" />
            ))}
        </div>
    )
}
