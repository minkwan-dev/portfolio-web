import { PageShell } from "@/shared/components/PageShell"
import { CommentSection } from "@/feature/blog-detail/components/commentSection/CommentSection"
import { PostDetailSection } from "@/feature/blog-detail/components/postDetailSection/PostDetailSection"
import { POST_DETAIL_CONTAINER_CLASS } from "@/shared/constants/page-layout"

type BlogDetailPageProps = {
    slug: string
}

export default function BlogDetailPage({ slug }: BlogDetailPageProps) {
    return (
        <PageShell active="blog">
            <main className={`flex flex-col gap-10 py-10 ${POST_DETAIL_CONTAINER_CLASS}`}>
                <PostDetailSection slug={slug} />
                <CommentSection postSlug={slug} />
            </main>
        </PageShell>
    )
}