import { HeroSection } from "@/feature/home/components/HeroSection"
import { FeaturedPosts } from "@/feature/home/components/FeaturedPosts/FeaturedPosts"
import { PageShell } from "@/shared/components/PageShell"

export default function HomePage() {
    return (
        <PageShell active="home">
            <HeroSection />
            <FeaturedPosts />
        </PageShell>
    )
}
