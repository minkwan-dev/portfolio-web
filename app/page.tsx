import { HeroSection } from "@/components/home/hero-section"
import { FeaturedPosts } from "@/components/home/featured-posts/featured-posts"
import { PageShell } from "@/components/layout/page-shell"

export default function Home() {
    return (
        <PageShell active="home">
            <HeroSection />
            <FeaturedPosts />
        </PageShell>
    )
}