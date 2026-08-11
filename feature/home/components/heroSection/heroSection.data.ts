import { Award, BookOpen, GraduationCap, Layers, type LucideIcon } from "lucide-react"

export const introLines = [
    "깊이 있는 역량은 넓은 시야에서 시작된다고 믿습니다.",
    "새로운 기술과 다양한 문제 영역을 꾸준히 탐구하며 성장하고 있습니다.",
    "문제의 본질을 정확히 짚어내고 해결하는 것에 집중합니다.",
]

export const pillClass =
    "rounded-full border border-gray-300 bg-white px-3 py-1 text-[12px] text-gray-700"

type HeroInfoText = {
    id: string
    label: string
    icon: LucideIcon
    type: "text"
    value: string
}

type HeroInfoPills = {
    id: string
    label: string
    icon: LucideIcon
    type: "pills"
    values: string[]
}

export type HeroInfoItem = HeroInfoText | HeroInfoPills

export const heroInfoItems: HeroInfoItem[] = [
    {
        id: "education",
        label: "Education",
        icon: GraduationCap,
        type: "text",
        value: "경기대학교 응용통계학 / 행정학 학사",
    },
    {
        id: "training",
        label: "Training",
        icon: BookOpen,
        type: "text",
        value: "삼성청년 SW·AI 아카데미(SSAFY) 15기",
    },
    {
        id: "certifications",
        label: "Certifications",
        icon: Award,
        type: "pills",
        values: ["SQLD", "ADsP", "정보처리기사"],
    },
    {
        id: "tech-stack",
        label: "Tech Stack",
        icon: Layers,
        type: "pills",
        values: [
            "React",
            "TypeScript",
            "Next.js",
            "Tanstack Query",
            "Tailwind",
            "Nest.js",
            "MySQL",
            "AWS",
            "GitHub Actions",
            "Sentry",
        ],
    },
]