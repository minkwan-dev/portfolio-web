import Image from "next/image"
import { introLines } from "@/feature/home/components/heroSection/heroSection.data"

export function HeroIntro() {
    return (
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div className="flex max-w-2xl flex-col gap-4">
                <p className="text-[14px] font-medium uppercase tracking-wider text-gray-500">
                    Frontend Developer
                </p>
                <h1 className="text-[28px] font-bold leading-[1.4] tracking-tight text-black sm:text-[30px]">
                    프론트엔드 개발자 원민관입니다.
                </h1>
                <ul className="mt-4 flex flex-col gap-2 text-[17px] leading-[1.65] text-gray-600">
                    {introLines.map((line) => (
                        <li key={line} className="flex gap-2.5">
                            <span
                                className="mt-[0.65em] size-1 shrink-0 rounded-full bg-black"
                                aria-hidden
                            />
                            <span>{line}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-center lg:justify-end">
                <div className="relative size-[300px] max-w-full shrink-0 sm:size-[320px]">
                    <Image
                        src="/profile.jpg"
                        alt="Minkwan 프로필 사진"
                        fill
                        priority
                        sizes="(max-width: 640px) 300px, 320px"
                        className="rounded-full border-4 border-gray-200 object-cover shadow-md grayscale"
                    />
                </div>
            </div>
        </div>
    )
}