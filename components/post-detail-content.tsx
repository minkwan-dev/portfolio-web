"use client"

import { usePostDetailQuery } from "@/hooks/api/use-posts"

type PostDetailContentProps = {
  slug: string
}

export function PostDetailContent({ slug }: PostDetailContentProps) {
    const { data: post } = usePostDetailQuery(slug)

    return (
    <article className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-black">{post.title}</h1>
        {post.shortDescription ? (<p className="text-gray-600">{post.shortDescription}</p>) : null}
        <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body }}
        />
    </article>
    )
}