"use client"

import { useQuery } from "@tanstack/react-query"
import { FeaturedPostsHeader } from "@/components/featured-posts-header"
import { FeaturedPostsSkeleton } from "@/components/featured-posts-skeleton"
import { PostCard } from "@/components/post-card"
import { getPostsBySlugs } from "@/lib/api/posts"
import { LANDING_POST_SLUGS, LANDING_ROWS } from "@/lib/landing-rows"
import { postKeys } from "@/lib/query-keys"
import type { PostListItem } from "@/lib/types/post"

function chunkByRows(posts: PostListItem[]): PostListItem[][] {
    const map = new Map(posts.map((post) => [post.urlSlug, post]))

    return LANDING_ROWS.map((row) =>
        row
            .map((slug) => map.get(slug))
            .filter((post): post is PostListItem => post !== undefined),
    )
}

export function FeaturedPosts() {
    const { data, isLoading, isError } = useQuery({
        queryKey: postKeys.bySlugs(LANDING_POST_SLUGS),
        queryFn: () => getPostsBySlugs(LANDING_POST_SLUGS),
    })

    if (isLoading) return <FeaturedPostsSkeleton />
    if (isError || !data) return null

    const rows = chunkByRows(data)

    return (
        <section className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-16 pt-6">
            <div className="flex flex-col gap-10 border-t border-gray-300 pt-5">
                <FeaturedPostsHeader />
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {row.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
