import Image from "next/image"
import Link from "next/link"
import { formatPostDate } from "@/lib/format-date"
import { resolvePostThumbnail } from "@/lib/post-thumbnail"
import type { PostListItem } from "@/lib/types/post"

type PostCardProps = {
    post: PostListItem
}

export function PostCard({ post }: PostCardProps) {
    const thumbnailSrc = resolvePostThumbnail(post.thumbnail)
    const isFallback = thumbnailSrc === "/fallback-post.png"
    const primaryTag = post.tags[0]

    return (
        <Link
            href={`/blog/${post.urlSlug}`}
            className="group flex h-full flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-colors hover:border-gray-300 hover:bg-gray-50/50"
        >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-50">
                <Image
                    src={thumbnailSrc}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    unoptimized={!isFallback}
                />
            </div>

            <div className="flex flex-1 flex-col gap-2.5">
                <h3 className="line-clamp-2 min-h-[2.75rem] text-[15px] font-bold leading-snug text-black lg:min-h-[3rem] lg:text-[16px]">
                    {post.title}
                </h3>

                <div className="mt-auto flex items-center justify-between gap-2 text-sm">
                    <span className="text-gray-400">
                        {formatPostDate(post.releasedAt)}
                    </span>
                    {primaryTag ? (
                        <span className="shrink-0 rounded-md border border-gray-200 px-2 py-0.5 text-xs text-gray-600">
                            {primaryTag}
                        </span>
                    ) : null}
                </div>
            </div>
        </Link>
    )
}
