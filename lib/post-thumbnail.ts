const FALLBACK_THUMBNAIL = "/fallback-post.png"

export function resolvePostThumbnail(thumbnail: string | null): string {
    if (!thumbnail || thumbnail.trim() === "") {
        return FALLBACK_THUMBNAIL
    }

    return thumbnail
}