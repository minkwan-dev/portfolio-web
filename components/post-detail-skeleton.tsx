export function PostDetailSkeleton() {
    return (
    <article className="flex flex-col gap-4">
        <div className="h-10 w-2/3 animate-pulse rounded-lg bg-gray-100" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-gray-100" />
        <div className="mt-4 h-64 animate-pulse rounded-2xl bg-gray-100" />
    </article>
    )
}