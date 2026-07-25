"use client"

import { X } from "lucide-react"
import { NewsletterEnvelopeIllustration } from "@/components/newsletter-envelope-illustration"
import { dismissNewsletterModalForMonth } from "@/lib/newsletter-modal-storage"

type NewsletterSubscribeModalProps = {
    open: boolean
    onClose: () => void
    subscribeHref?: string
}

export function NewsletterSubscribeModal({
    open,
    onClose,
    subscribeHref = "https://velog.io/@your-id/posts",
}: NewsletterSubscribeModalProps) {
    const handleDismissMonth = () => {
        dismissNewsletterModalForMonth()
        onClose()
    }

    return (
        <div
            className={`fixed right-6 bottom-6 z-40 w-[min(100%,320px)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-8 opacity-0"
            }`}
            role="dialog"
            aria-live="polite"
            aria-label="뉴스레터 구독"
        >
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="닫기"
                    className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-700"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="flex flex-col gap-5">
                    <p className="pr-8 text-lg leading-snug font-bold text-black">
                        뉴스레터가 발행되면
                        <br />
                        이메일로 알려드릴게요
                    </p>

                    <NewsletterEnvelopeIllustration />

                    <a
                        href={subscribeHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-12 items-center justify-center rounded-2xl bg-black text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        구독하기
                    </a>

                    <button
                        type="button"
                        onClick={handleDismissMonth}
                        className="text-sm text-gray-500 underline-offset-2 hover:underline"
                    >
                        한 달 동안 보지 않기
                    </button>
                </div>
            </div>
        </div>
    )
}