export const COMMENT_AVATARS = [
    "/avatars/01.svg",
    "/avatars/02.svg",
    "/avatars/03.svg",
    "/avatars/04.svg",
    "/avatars/05.svg",
    "/avatars/06.svg",
    "/avatars/07.svg",
    "/avatars/08.svg",
    "/avatars/09.svg",
    "/avatars/10.svg",
    "/avatars/11.svg",
    "/avatars/12.svg",
    "/avatars/13.svg",
    "/avatars/14.svg",
    "/avatars/15.svg",
  ] as const
  
  export type CommentAvatar = (typeof COMMENT_AVATARS)[number]