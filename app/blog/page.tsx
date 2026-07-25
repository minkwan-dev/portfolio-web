import { PostList } from "@/components/post-list"
import { SiteHeader } from "@/components/site-header"

export default function BlogPage() {
    return (
    <div className="flex flex-1 flex-col bg-white text-black">
        <SiteHeader active="blog" />
        <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
            <h1 className="text-2xl font-bold text-black">Blog</h1>
            <PostList />
        </main>
    </div>
  )
}