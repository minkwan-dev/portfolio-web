export const FALLBACK_POST_THUMBNAIL = "/fallback-post.png"

export function resolvePostThumbnail(thumbnail: string | null): string {
    if (!thumbnail || thumbnail.trim() === "") {
        return FALLBACK_POST_THUMBNAIL
    }

    return thumbnail
}