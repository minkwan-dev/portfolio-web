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
        <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
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
        </header>
    )
}