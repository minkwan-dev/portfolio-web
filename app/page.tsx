import { HeroSection } from "@/components/hero-section"
import { SiteHeader } from "@/components/site-header"
import { FeaturedPosts } from "@/components/featured-posts"

export default function Home() {
    return (
        <div className="flex flex-1 flex-col bg-white text-black">
            <SiteHeader active="home" />
            <HeroSection />
            <FeaturedPosts />
        </div>
    )
}
