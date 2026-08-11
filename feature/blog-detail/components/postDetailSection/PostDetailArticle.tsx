"use client"

import Image from "next/image"
import { PostMarkdownBody } from "@/feature/blog-detail/components/postDetailSection/PostMarkdownBody"
import { resolvePostDetailDisplay } from "@/feature/blog-detail/utils/dedupe-thumbnail"
import { formatPostDate } from "@/shared/utils/format-date"

type PostDetailArticleProps = {
    title: string
    releasedAt: string | null
    thumbnail: string | null
    body: string
    emptyBodyMessage?: string
}

export function PostDetailArticle({
    title,
    releasedAt,
    thumbnail,
    body,
    emptyBodyMessage,
}: PostDetailArticleProps) {
    const formattedDate = formatPostDate(releasedAt)
    const { heroSrc, body: displayBody, isFallback } = resolvePostDetailDisplay(thumbnail, body)

    return (
        <article className="flex flex-col gap-8">
            <header className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                    {title}
                </h1>
                {formattedDate ? (
                    <p className="text-sm text-gray-500">{formattedDate}</p>
                ) : null}
            </header>

            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                    src={heroSrc}
                    alt={title}
                    fill
                    sizes="800px"
                    className="object-cover"
                    unoptimized={!isFallback}
                />
            </div>

            {body.trim() ? (
                <PostMarkdownBody content={displayBody} />
            ) : emptyBodyMessage ? (
                <p className="text-sm text-gray-400">{emptyBodyMessage}</p>
            ) : null}
        </article>
    )
}
