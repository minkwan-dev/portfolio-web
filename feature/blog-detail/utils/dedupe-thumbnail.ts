import { FALLBACK_POST_THUMBNAIL } from "@/shared/utils/post-thumbnail"

function normalizeImageUrl(url: string): string {
    try {
        const parsed = new URL(url.trim())
        return `${parsed.origin}${parsed.pathname}`
    } catch {
        return url.trim()
    }
}

function urlsMatch(a: string, b: string): boolean {
    return normalizeImageUrl(a) === normalizeImageUrl(b)
}

export function extractFirstImageUrl(body: string): string | null {
    const trimmed = body.trimStart()

    const wrappedHtmlMatch = trimmed.match(
        /^<p>\s*<img[^>]+src=["']([^"']+)["'][^>]*>\s*<\/p>/i,
    )
    if (wrappedHtmlMatch) return wrappedHtmlMatch[1]

    const htmlMatch = trimmed.match(/^<img[^>]+src=["']([^"']+)["']/i)
    if (htmlMatch) return htmlMatch[1]

    const mdMatch = trimmed.match(/^!\[[^\]]*]\(([^)]+)\)/)
    if (mdMatch) return mdMatch[1]

    return null
}

function stripFirstImageFromBody(body: string): string {
    const leadingWhitespace = body.match(/^\s*/)?.[0] ?? ""
    const trimmed = body.trimStart()

    const wrappedHtmlPattern = /^<p>\s*<img[^>]+>\s*<\/p>\s*/i
    if (wrappedHtmlPattern.test(trimmed)) {
        return leadingWhitespace + trimmed.replace(wrappedHtmlPattern, "")
    }

    const htmlPattern = /^<img[^>]+>\s*/i
    if (htmlPattern.test(trimmed)) {
        return leadingWhitespace + trimmed.replace(htmlPattern, "")
    }

    const mdPattern = /^!\[[^\]]*]\([^)]+\)\s*/
    if (mdPattern.test(trimmed)) {
        return leadingWhitespace + trimmed.replace(mdPattern, "")
    }

    return body
}

export function resolvePostDetailDisplay(
    thumbnail: string | null,
    body: string,
): { heroSrc: string; body: string; isFallback: boolean } {
    const firstImage = extractFirstImageUrl(body)

    let heroSrc: string
    if (thumbnail?.trim()) {
        heroSrc = thumbnail.trim()
    } else if (firstImage) {
        heroSrc = firstImage
    } else {
        heroSrc = FALLBACK_POST_THUMBNAIL
    }

    const isFallback = heroSrc === FALLBACK_POST_THUMBNAIL
    const displayBody =
        firstImage && urlsMatch(heroSrc, firstImage)
            ? stripFirstImageFromBody(body)
            : body

    return { heroSrc, body: displayBody, isFallback }
}
