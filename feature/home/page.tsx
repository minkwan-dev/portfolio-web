import { PageShell } from "@/shared/components/PageShell"
import { HeroSection } from "@/feature/home/components/heroSection/HeroSection"
import { FeaturedPosts } from "@/feature/home/components/featuredPosts/FeaturedPosts"

export default function HomePage() {
    return (
        <PageShell active="home">
            <HeroSection />
            <FeaturedPosts />
        </PageShell>
    )
}
