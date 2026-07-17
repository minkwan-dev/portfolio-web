import Image from "next/image"
import { Award, BookOpen, GraduationCap, Layers } from "lucide-react"
import { InfoItem } from "@/components/info-item"

const certifications = ["SQLD", "ADsP", "정보처리기사"]

const techStack = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Nest.js",
    "MySQL",
    "AWS",
    "GitHub Actions",
    "Sentry",
]

const pillClass =
    "rounded-full border border-gray-300 bg-white px-3 py-1 text-[12px] text-gray-700"

const introLines = [
    "깊이 있는 역량은 넓은 시야에서 시작된다고 믿습니다.",
    "새로운 기술과 다양한 문제 영역을 꾸준히 탐구하며 성장하고 있습니다.",
    "문제의 본질을 정확히 짚어내고 해결하는 것에 집중합니다.",
]

export function HeroSection() {
    return (
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8 lg:gap-8 lg:py-10">
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

            <div className="flex flex-col gap-4 border-t border-gray-300 pt-5">
                <InfoItem
                    icon={<GraduationCap className="size-[18px]" strokeWidth={1.75} />}
                    label="Education"
                >
                    경기대학교 응용통계학 / 행정학 학사
                </InfoItem>

                <InfoItem
                    icon={<BookOpen className="size-[18px]" strokeWidth={1.75} />}
                    label="Training"
                >
                    삼성청년 SW·AI 아카데미(SSAFY) 15기
                </InfoItem>

                <InfoItem
                    icon={<Award className="size-[18px]" strokeWidth={1.75} />}
                    label="Certifications"
                >
                    <div className="flex flex-wrap gap-2 pt-0.5">
                        {certifications.map((name) => (
                            <span key={name} className={pillClass}>
                                {name}
                            </span>
                        ))}
                    </div>
                </InfoItem>

                <InfoItem
                    icon={<Layers className="size-[18px]" strokeWidth={1.75} />}
                    label="Tech Stack"
                >
                    <div className="flex flex-wrap gap-2 pt-0.5">
                        {techStack.map((name) => (
                            <span key={name} className={pillClass}>
                                {name}
                            </span>
                        ))}
                    </div>
                </InfoItem>
            </div>
        </section>
    )
}
