import { PageShell } from "@/shared/components/PageShell"
import { CommentSection } from "@/feature/blog-detail/components/commentSection/CommentSection"
import { PostDetailSection } from "@/feature/blog-detail/components/postDetailSection/PostDetailSection"

type BlogDetailPageProps = {
    slug: string
}

export default function BlogDetailPage({ slug }: BlogDetailPageProps) {
    return (
        <PageShell active="blog">
            <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-10">
                <PostDetailSection slug={slug} />
                <CommentSection postSlug={slug} />
            </main>
        </PageShell>
    )
}