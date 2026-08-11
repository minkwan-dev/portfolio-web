"use client"

import { PostArticle } from "@/shared/components/post/PostArticle"
import { usePostDetailQuery } from "@/feature/blog-detail/api/useBlogDetailQuery"

type PostDetailContentProps = {
    slug: string
}

export function PostDetailContent({ slug }: PostDetailContentProps) {
    const { data: post } = usePostDetailQuery(slug)

    return (
        <PostArticle
            title={post.title}
            releasedAt={post.releasedAt}
            thumbnail={post.thumbnail}
            body={post.body}
        />
    )
}
