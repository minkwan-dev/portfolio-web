import type { ReactNode } from "react";

type InfoItemProps = {
    icon: ReactNode
    label: string
    children: ReactNode
}

export function InfoItem({ icon, label, children }: InfoItemProps) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#d4e8dc] text-gray-700">
                {icon}
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {label}
                </span>
                <div className="text-sm leading-relaxed text-gray-800">
                    {children}
                </div>
            </div>
        </div>
    )
}