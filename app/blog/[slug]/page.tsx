import BlogDetailPage from "@/feature/blog-detail/page"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params

    return <BlogDetailPage slug={slug} />
}
