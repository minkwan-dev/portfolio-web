"use client"

import { PostCard } from "@/shared/components/PostCard"
import { usePostsInfiniteQuery } from "@/feature/blog-list/api/useBlogListQuery"

export function PostListContent() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        usePostsInfiniteQuery()

    const posts = data.pages.flatMap((page) => page.posts)

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {hasNextPage ? (
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                        className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isFetchingNextPage ? "불러오는 중..." : "더 보기"}
                    </button>
                </div>
            ) : null}
        </div>
    )
}