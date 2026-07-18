import { LANDING_ROWS } from "@/lib/landing-rows"

export function FeaturedPostsSkeleton() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-6">
            {LANDING_ROWS.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {row.map((slug) => (
                        <div
                            key={slug}
                            className="h-[260px] animate-pulse rounded-2xl border border-gray-200 bg-gray-100"
                        />
                    ))}
                </div>
            ))}
        </section>
    )
}
