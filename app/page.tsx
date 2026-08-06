import { HeroSection } from "@/components/home/hero-section"
import { FeaturedPosts } from "@/components/home/featured-posts/featured-posts"
import { PageShell } from "@/shared/components/PageShell"

export default function Home() {
    return (
        <PageShell active="home">
            <HeroSection />
            <FeaturedPosts />
        </PageShell>
    )
}