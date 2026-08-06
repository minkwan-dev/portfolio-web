"use client"

import Image from "next/image"
import { PostMarkdownBody } from "@/feature/blog-detail/components/PostMarkdownBody"
import { usePostDetailQuery } from "@/feature/blog-detail/api/useBlogDetailQuery"
import { formatPostDate } from "@/shared/utils/format-date"
import { resolvePostDetailDisplay } from "@/feature/blog-detail/utils/dedupe-thumbnail"

type PostDetailContentProps = {
  slug: string
}

export function PostDetailContent({ slug }: PostDetailContentProps) {
    const { data: post } = usePostDetailQuery(slug)
    const releasedAt = formatPostDate(post.releasedAt)
    const { heroSrc, body, isFallback } = resolvePostDetailDisplay(post.thumbnail, post.body)

    return (
    <article className="flex flex-col gap-8">
        <header className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                {post.title}
            </h1>
            {releasedAt ? (
                <p className="text-sm text-gray-500">{releasedAt}</p>
            ) : null}
        </header>

        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
                src={heroSrc}
                alt={post.title}
                fill
                priority
                sizes="800px"
                className="object-cover"
                unoptimized={!isFallback}
            />
        </div>

        <PostMarkdownBody content={body} />
    </article>
    )
}
