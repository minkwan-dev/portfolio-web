import { FeaturedPostsHeader } from "@/feature/home/components/FeaturedPosts/FeaturedPostsHeader"

const SKELETON_ROWS = 5
const SKELETON_COLS = 3

export function FeaturedPostsSkeleton() {
    return (
    <section className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-16 pt-6">
        <div className="flex flex-col gap-10 border-t border-gray-300 pt-5">
            <FeaturedPostsHeader />
            {Array.from({ length: SKELETON_ROWS }).map((_, rowIndex) => (
            <div
                key={rowIndex}
                className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                {Array.from({ length: SKELETON_COLS }).map((__, colIndex) => (
                <div
                    key={colIndex}
                    className="h-[260px] animate-pulse rounded-2xl border border-gray-200 bg-gray-100"
                />
                ))}
            </div>
            ))}
        </div>
    </section>
  )
}