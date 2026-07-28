import { COMMENT_AVATARS } from "@/lib/comment/avatars"
import type { CommentIdentity } from "@/lib/comment/types"

const ADJECTIVES = [
    "재미있는", "활기찬", "용감한", "조용한", "빠른", "느긋한", "반짝이는", "든든한",
    "상냥한", "씩씩한", "유쾌한", "다정한", "명랑한", "차분한", "호기심 많은",
    "성실한", "따뜻한", "당당한", "센스 있는", "긍정적인", "친절한", "유머러스한",
    "똑똑한", "엉뚱한", "용맹한", "소심한", "대담한", "온화한",
] as const

const NAMES = [
    "영수", "영호", "영식", "영철", "광수", "상철",
    "영숙", "정숙", "순자", "영자", "옥순", "현숙",
] as const

const STORAGE_KEY = "comment-identity"

function pickRandom<T>(items: readonly T[]): T {
    return items[Math.floor(Math.random() * items.length)]
}

export function generateCommentIdentity(): CommentIdentity {
    return {
        nickname: `${pickRandom(ADJECTIVES)} ${pickRandom(NAMES)}`,
        avatar: pickRandom(COMMENT_AVATARS),
    }
}

function isValidCommentIdentity(value: CommentIdentity): boolean {
    const isValidNickname = ADJECTIVES.some((adj) =>
        NAMES.some((name) => value.nickname === `${adj} ${name}`),
    )
    const isValidAvatar = COMMENT_AVATARS.includes(value.avatar as (typeof COMMENT_AVATARS)[number])

    return isValidNickname && isValidAvatar
}

export function loadStoredCommentIdentity(): CommentIdentity | null {
    if (typeof window === "undefined") return null

    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return null

        const parsed = JSON.parse(raw) as CommentIdentity
        if (!isValidCommentIdentity(parsed)) return null

        return parsed
    } catch {
        return null
    }
}

export function saveCommentIdentity(identity: CommentIdentity): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(identity))
}