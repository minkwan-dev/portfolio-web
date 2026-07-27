import { PostDetailSection } from "@/components/blog-post/post-detail-section"
import { PageShell } from "@/components/layout/page-shell"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params

    return (
        <PageShell active="blog">
            <PostDetailSection slug={slug} />
        </PageShell>
    )
}