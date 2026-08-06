import { PostDetailSection } from "@/feature/blog-detail/components/PostDetailSection"
import { PageShell } from "@/shared/components/PageShell"

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
