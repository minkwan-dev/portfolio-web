import { SiteHeader } from "@/components/layout/site-header"

type PageShellProps = {
    active: "home" | "blog"
    children: React.ReactNode
}

export function PageShell({ active, children }: PageShellProps) {
    return (
        <div className="flex flex-1 flex-col bg-white text-black">
            <SiteHeader active={active} />
            {children}
        </div>
    )
}