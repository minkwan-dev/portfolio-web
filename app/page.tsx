import { Award, BookOpen, GraduationCap } from "lucide-react"
import { InfoItem } from "@/components/info-item"
import { SiteHeader } from "@/components/site-header"

const certifications = ["SQLD", "ADsP", "정보처리기사"]

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#f9f9f9]">
      <SiteHeader active="home" />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
        <InfoItem
          icon={<GraduationCap className="size-5" strokeWidth={1.75}/>}
          label='Education'
        >
          경기대학교 응용통계학 / 행정학 학사
        </InfoItem>
        <InfoItem
          icon={<BookOpen className="size-5" strokeWidth={1.75} />}
          label="Training"
        >
          삼성청년 SW·AI 아카데미(SSAFY) 15기
        </InfoItem>
        <InfoItem
          icon={<Award className="size-5" strokeWidth={1.75} />}
          label="Certifications"
        >
          <div className="flex flex-wrap gap-2 pt-0.5">
            {certifications.map((name) => (
              <span
                key={name}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700"
              >
                {name}
              </span>
            ))}
          </div>
        </InfoItem>
      </main>
    </div>
  );
}