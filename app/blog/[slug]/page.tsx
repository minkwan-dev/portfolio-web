import { PostDetailSection } from "@/components/post-detail-section"
import { SiteHeader } from "@/components/layout/site-header"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params

    return (
    <div className="flex flex-1 flex-col bg-white text-black">
        <SiteHeader active="blog" />
        <PostDetailSection slug={slug} />
    </div>
    )
}