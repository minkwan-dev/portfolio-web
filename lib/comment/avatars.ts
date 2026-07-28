export const COMMENT_AVATARS = [
  "/avatars/avatar01.svg",
  "/avatars/avatar02.svg",
  "/avatars/avatar03.svg",
  "/avatars/avatar04.svg",
  "/avatars/avatar05.svg",
  "/avatars/avatar06.svg",
  "/avatars/avatar07.svg",
  "/avatars/avatar08.svg",
  "/avatars/avatar09.svg",
  "/avatars/avatar10.svg",
  "/avatars/avatar11.svg",
  "/avatars/avatar12.svg",
  "/avatars/avatar13.svg",
  "/avatars/avatar14.svg",
  "/avatars/avatar15.svg",
] as const

export type CommentAvatar = (typeof COMMENT_AVATARS)[number]