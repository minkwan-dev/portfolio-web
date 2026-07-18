import { LANDING_ROWS } from "@/lib/landing-rows"

export function FeaturedPostsSkeleton() {
    return (
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pb-12 pt-2">
            {LANDING_ROWS.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {row.map((slug) => (
                        <div
                            key={slug}
                            className="h-[300px] animate-pulse rounded-2xl bg-gray-100"
                        />
                    ))}
                </div>
            ))}
        </section>
    )
}