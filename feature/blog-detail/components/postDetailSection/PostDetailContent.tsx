"use client"

import { PostDetailArticle } from "@/feature/blog-detail/components/postDetailSection/PostDetailArticle"
import { usePostDetailQuery } from "@/feature/blog-detail/api/useBlogDetailQuery"

type PostDetailContentProps = {
    slug: string
}

export function PostDetailContent({ slug }: PostDetailContentProps) {
    const { data: post } = usePostDetailQuery(slug)

    return (
        <PostDetailArticle
            title={post.title}
            releasedAt={post.releasedAt}
            thumbnail={post.thumbnail}
            body={post.body}
        />
    )
}
