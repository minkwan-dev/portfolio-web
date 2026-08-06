import { PageShell } from "@/shared/components/PageShell"
import { PostDetailSection } from "@/feature/blog-detail/components/PostDetailSection"

type BlogDetailPageProps = {
    slug: string
}

export default function BlogDetailPage({ slug }: BlogDetailPageProps) {
    return (
        <PageShell active="blog">
            <PostDetailSection slug={slug} />
        </PageShell>
    )
}
