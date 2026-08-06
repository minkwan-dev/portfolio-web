export const homeKeys = {
    all: ["posts"] as const,
    main: () => [...homeKeys.all, "main"] as const,
}