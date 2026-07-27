"use client"

import { PostCard } from "@/components/blog/post-card"
import { usePostsQuery } from "@/lib/post/use-posts"

export function PostListContent() {
    const { data: posts } = usePostsQuery()

    return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
    </div>
    )
}