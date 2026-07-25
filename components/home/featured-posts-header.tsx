import Link from "next/link"

export function FeaturedPostsHeader() {
    return (
        <div className="flex items-center justify-between">
            <p className="text-[14px] font-medium uppercase tracking-wider text-gray-500">
                대표글
            </p>
            <Link
                href="/blog"
                className="text-[13px] text-gray-500 transition-colors hover:text-black"
            >
                더 알아보기
            </Link>
        </div>
    )
}
