import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Minkwan",
    description: "Minkwan's portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko" className="h-full">
            <body
                className={`${geistSans.className} min-h-full flex flex-col bg-white text-black antialiased`}
            >
                {children}
            </body>
        </html>
    )
}