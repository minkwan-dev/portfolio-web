export function CommentListSkeleton() {
    return (
    <ul className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
            <li
                key={index}
                className="h-24 animate-pulse rounded-2xl border border-gray-200 bg-gray-100"
            />
        ))}
    </ul>
    )
}