import Link from "next/link"
import { ADMIN_CONTAINER_CLASS } from "@/shared/constants/page-layout"

type AdminPageShellProps = {
    active: "posts"
    children: React.ReactNode
}

export function AdminPageShell({ active, children }: AdminPageShellProps) {
    return (
        <div className="flex min-h-full flex-col bg-gray-50 text-black">
            <header className="border-b border-gray-200 bg-white">
                <div className={`flex items-center justify-between py-4 ${ADMIN_CONTAINER_CLASS}`}>
                    <Link href="/admin/posts" className="text-sm font-semibold">
                        Admin
                    </Link>
                    <nav className="flex items-center gap-2">
                        <Link
                            href="/admin/posts"
                            className={`rounded-full px-3 py-1 text-xs ${
                                active === "posts"
                                    ? "bg-black text-white"
                                    : "text-gray-500 hover:text-black"
                            }`}
                        >
                            글 관리
                        </Link>
                        <Link
                            href="/"
                            className="rounded-full px-3 py-1 text-xs text-gray-500 hover:text-black"
                        >
                            사이트로
                        </Link>
                    </nav>
                </div>
            </header>
            {children}
        </div>
    )
}
