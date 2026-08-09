import { SiteHeader } from "@/shared/components/SiteHeader"

export default function AdminManageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-full flex-col bg-white text-black">
            <SiteHeader variant="admin" active="posts" />
            <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        </div>
    )
}
