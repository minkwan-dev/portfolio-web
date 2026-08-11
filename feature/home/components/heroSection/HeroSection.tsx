import { HeroIntro } from "@/feature/home/components/heroSection/HeroIntro"
import { HeroInfoList } from "@/feature/home/components/heroSection/HeroInfoList"

export function HeroSection() {
    return (
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8 lg:gap-8 lg:py-10">
            <HeroIntro />
            <HeroInfoList />
        </section>
    )
}