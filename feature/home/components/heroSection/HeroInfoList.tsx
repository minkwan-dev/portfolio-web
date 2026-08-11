import { InfoItem } from "@/feature/home/components/heroSection/InfoItem"
import {
    heroInfoItems,
    pillClass,
    type HeroInfoItem,
} from "@/feature/home/components/heroSection/heroSection.data"

function InfoPills({ values }: { values: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 pt-0.5">
            {values.map((name) => (
                <span key={name} className={pillClass}>
                    {name}
                </span>
            ))}
        </div>
    )
}

function HeroInfoContent({ item }: { item: HeroInfoItem }) {
    if (item.type === "text") {
        return item.value
    }

    return <InfoPills values={item.values} />
}

export function HeroInfoList() {
    return (
        <div className="flex flex-col gap-4 border-t border-gray-300 pt-5">
            {heroInfoItems.map((item) => {
                const Icon = item.icon

                return (
                    <InfoItem
                        key={item.id}
                        icon={<Icon className="size-[18px]" strokeWidth={1.75} />}
                        label={item.label}
                    >
                        <HeroInfoContent item={item} />
                    </InfoItem>
                )
            })}
        </div>
    )
}