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
            className="group flex flex-col gap-4 rounded-2xl bg-gray-50 p-5 transition-colors hover:bg-gray-100/80"
        >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white">
                <Image
                    src={thumbnailSrc}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    unoptimized={!isFallback}
                />
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="line-clamp-2 text-[17px] font-bold leading-snug text-black">
                    {post.title}
                </h3>

                <div className="flex items-center gap-2 text-sm">
                    <div className="relative size-6 shrink-0 overflow-hidden rounded-full bg-black">
                        <Image
                            src="/profile.jpg"
                            alt="원민관"
                            fill
                            sizes="24px"
                            className="object-cover grayscale"
                        />
                    </div>
                    <span className="font-medium text-black">원민관</span>
                    <span className="text-gray-400">
                        {formatPostDate(post.releasedAt)}
                    </span>
                </div>

                {primaryTag ? (
                    <span className="w-fit rounded-md border border-gray-200 bg-white px-2 py-0.5 text-xs text-gray-600">
                        {primaryTag}
                    </span>
                ) : null}
            </div>
        </Link>
    )
}