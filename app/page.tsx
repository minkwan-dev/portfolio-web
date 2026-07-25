import { HeroSection } from "@/components/home/hero-section"
import { SiteHeader } from "@/components/layout/site-header"
import { FeaturedPosts } from "@/components/home/featured-posts"

export default function Home() {
    return (
        <div className="flex flex-1 flex-col bg-white text-black">
            <SiteHeader active="home" />
            <HeroSection />
            <FeaturedPosts />
        </div>
    )
}
