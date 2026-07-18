"use client"

import { useQuery } from "@tanstack/react-query"
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
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pb-12 pt-2">
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {row.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            ))}
        </section>
    )
}