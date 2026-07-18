import Link from "next/link"

const navItems = [
    { key: "home" as const, label: "home", href: "/" },
    { key: "blog" as const, label: "blog", href: "/blog" },
]

type SiteHeaderProps = {
    active: "home" | "blog"
}

export function SiteHeader({ active }: SiteHeaderProps) {
    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-300/70 bg-white/75 backdrop-blur-md">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
                    <Link
                        href="/"
                        className="font-mono text-[15px] font-semibold tracking-tight text-black"
                    >
                        {"< Minkwan />"}
                    </Link>

                    <nav className="flex items-center gap-1.5">
                        {navItems.map(({ key, label, href }) => {
                            const isActive = active === key

                            return (
                                <Link
                                    key={key}
                                    href={href}
                                    className={`rounded-full px-3.5 py-1 text-[12px] font-medium transition-colors ${
                                        isActive
                                            ? "bg-black text-white"
                                            : "text-gray-500 hover:text-black"
                                    }`}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </header>
            <div className="h-[73px] shrink-0" aria-hidden="true" />
        </>
    )
}