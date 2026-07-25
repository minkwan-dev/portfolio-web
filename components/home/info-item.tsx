import type { ReactNode } from "react"

type InfoItemProps = {
    icon: ReactNode
    label: string
    children: ReactNode
}

export function InfoItem({ icon, label, children }: InfoItemProps) {
    return (
        <div className="flex items-start gap-3.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                {icon}
            </div>
            <div className="flex min-w-0 flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    {label}
                </span>
                <div className="text-[15px] leading-relaxed text-gray-800">
                    {children}
                </div>
            </div>
        </div>
    )
}