"use client"

import { FeaturedPostsHeader } from "@/feature/home/components/FeaturedPosts/FeaturedPostsHeader"
import { PostCard } from "@/shared/components/PostCard"
import { useMainPostsQuery } from "@/feature/home/api/useHomePostsQuery"

export function FeaturedPostsContent() {
    const { data } = useMainPostsQuery()

    return (
        <section className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-16 pt-6">
            <div className="flex flex-col gap-10 border-t border-gray-300 pt-5">
                <FeaturedPostsHeader />
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((post) => (<PostCard key={post.id} post={post} />))}
                </div>
            </div>
        </section>
    )
}