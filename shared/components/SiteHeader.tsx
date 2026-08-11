import Link from "next/link"

const publicNavItems = [
    { key: "home" as const, label: "home", href: "/" },
    { key: "blog" as const, label: "blog", href: "/blog" },
]

const adminNavItems = [
    { key: "posts" as const, label: "글관리", href: "/admin/posts" },
    { key: "site" as const, label: "사이트로", href: "/" },
]

type SiteHeaderProps =
    | { variant?: "public"; active: "home" | "blog" }
    | { variant: "admin"; active: "posts" }

export function SiteHeader(props: SiteHeaderProps) {
    const variant = props.variant ?? "public"
    const navItems = variant === "admin" ? adminNavItems : publicNavItems

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-300/70 bg-white/75 backdrop-blur-md">
                <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
                    <Link
                        href="/"
                        className="font-mono text-[15px] font-semibold tracking-tight text-black"
                    >
                        {"< Minkwan />"}
                    </Link>

                    <nav className="flex items-center gap-1.5">
                        {navItems.map(({ key, label, href }) => {
                            const isActive = props.active === key

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