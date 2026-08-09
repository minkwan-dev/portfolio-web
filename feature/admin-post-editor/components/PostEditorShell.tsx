import Link from "next/link"

type PostEditorShellProps = {
    children: React.ReactNode
}

export function PostEditorShell({ children }: PostEditorShellProps) {
    return (
        <div className="flex h-dvh flex-col bg-white text-black">
            <header className="shrink-0 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between px-6 py-3">
                    <Link href="/admin/posts" className="text-sm font-semibold">
                        Admin
                    </Link>
                    <nav className="flex items-center gap-2">
                        <Link
                            href="/admin/posts"
                            className="rounded-full bg-black px-3 py-1 text-xs text-white"
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
            <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        </div>
    )
}
