import type { ReactNode } from "react"

const LANGUAGE_ALIASES: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    sh: "bash",
    shell: "bash",
    yml: "yaml",
    md: "markdown",
    plaintext: "text",
    text: "text",
}

export function resolveMarkdownLanguage(className?: string): string | null {
    const match = /language-([\w-]+)/.exec(className ?? "")
    if (!match) return null

    const raw = match[1].toLowerCase()
    return LANGUAGE_ALIASES[raw] ?? raw
}

export function extractMarkdownCodeString(children: ReactNode): string {
    return String(children).replace(/\n$/, "")
}
