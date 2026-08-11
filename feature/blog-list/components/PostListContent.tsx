"use client"

import { PostCard } from "@/shared/components/PostCard"
import { usePostsInfiniteQuery } from "@/feature/blog-list/api/useBlogListQuery"
import { PostListLoadMoreButton } from "@/feature/blog-list/components/PostListLoadMoreButton"

export function PostListContent() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePostsInfiniteQuery()

    const posts = data.pages.flatMap((page) => page.posts)

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {hasNextPage && (
                <PostListLoadMoreButton
                    onClick={() => fetchNextPage()}
                    isLoading={isFetchingNextPage}
                />
            )}
        </div>
    )
}
