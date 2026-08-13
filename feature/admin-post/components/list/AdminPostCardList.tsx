import { AdminPostCard } from "@/feature/admin-post/components/list/AdminPostCard"
import type { AdminPostListItem } from "@/shared/model/admin-post.types"

type AdminPostCardListProps = {
    posts: AdminPostListItem[]
}

export function AdminPostCardList({ posts }: AdminPostCardListProps) {
    return (
        <div className="md:hidden">
            {posts.map((post) => (
                <AdminPostCard key={post.id} post={post} />
            ))}
        </div>
    )
}
