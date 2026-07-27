export function PostDetailSkeleton() {
    return (
    <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
            <div className="h-10 w-2/3 animate-pulse rounded-lg bg-gray-100" />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-100" />
        </div>
        <div className="aspect-[2/1] w-full animate-pulse rounded-2xl bg-gray-100" />
        <div className="h-64 animate-pulse rounded-2xl bg-gray-100" />
    </article>
    )
}