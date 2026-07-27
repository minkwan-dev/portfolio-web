import { PostList } from "@/components/blog-list/post-list/post-list"
import { PageShell } from "@/components/layout/page-shell"

export default function BlogPage() {
    return (
        <PageShell active="blog">
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
                <h1 className="text-2xl font-bold text-black">Blog</h1>
                <PostList />
            </main>
        </PageShell>
    )
}