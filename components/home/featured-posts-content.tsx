"use client"

import { FeaturedPostsHeader } from "@/components/home/featured-posts-header"
import { PostCard } from "@/components/post-card"
import { useMainPostsQuery } from "@/hooks/api/use-posts"
import type { PostListItem } from "@/lib/types/post"

function chunk<T>(items: T[], size: number): T[][] {
    const rows: T[][] = []
    for (let i = 0; i < items.length; i += size) {
        rows.push(items.slice(i, i + size))
    }
    return rows
}

export function FeaturedPostsContent() {
    const { data } = useMainPostsQuery()
    const rows = chunk(data, 3)

    return (
    <section className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-16 pt-6">
        <div className="flex flex-col gap-10 border-t border-gray-300 pt-5">
            <FeaturedPostsHeader />
            {rows.map((row, rowIndex) => (
            <div
                key={rowIndex}
                className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                {row.map((post: PostListItem) => (
                <PostCard key={post.id} post={post} />
                ))}
            </div>
            ))}
        </div>
    </section>
  )
}