export function NewsletterEnvelopeIllustration() {
    return (
        <div className="newsletter-envelope-scene flex h-32 items-center justify-center py-2">
            <div className="newsletter-envelope-float relative h-24 w-28">
                <svg
                    viewBox="0 0 112 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full drop-shadow-[0_18px_28px_rgba(0,0,0,0.12)]"
                    aria-hidden="true"
                >
                    <rect
                        x="8"
                        y="28"
                        width="96"
                        height="56"
                        rx="10"
                        fill="#ffffff"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                    />
                    <path
                        d="M8 34 L56 62 L104 34"
                        stroke="#d1d5db"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 34 L56 62 L104 34"
                        fill="#f9fafb"
                        opacity="0.9"
                    />
                    <path
                        d="M8 34 L56 62 L104 34"
                        stroke="#e5e7eb"
                        strokeWidth="1.5"
                    />
                </svg>

                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6 fill-black text-black"
                            aria-hidden="true"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}