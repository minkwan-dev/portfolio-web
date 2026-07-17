import Link from "next/link";

const navItems = [
    { key: "home" as const, label: "home", href: "/" },
    { key: "blog" as const, label: "blog", href: "/blog" },
]

type SiteHeaderProps = {
    active: "home" | "blog";
}

export function SiteHeader({ active }: SiteHeaderProps) {
    return (
        <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8 border">
            <Link
                href="/"
                className="font-mono text-lg font-semibold tracking-tight text-gray-900"
            >
                {"< Minkwan />"}
            </Link>

            <nav className="flex items-center gap-2">
                {navItems.map(({ key, label, href }) => {
                    const isActive = active === key;

                    return (
                        <Link
                            key={key}
                            href={href}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium
                            transition-colors ${isActive ? "bg-[#d4e8dc] text-gray-800" : "text-gray-600 hover:text-gray-900"}`}
                        >
                            {label}
                        </Link>
                    )
                })}
            </nav>
            
        </header>
    )
}