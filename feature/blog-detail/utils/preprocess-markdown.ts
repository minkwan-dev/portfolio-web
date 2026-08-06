export function preprocessMarkdown(content: string): string {
    let result = content

    result = result.replace(/^>\s*(.+)$/gm, (line: string, body: string) => {
        const trimmed = body.trim().replace(/^["'""''""]|["'""''""]$/g, "")
        const referenceCount = (trimmed.match(/\[\d+\]/g) ?? []).length

        if (referenceCount < 2) return line

        const items = trimmed
            .split(/(?=\[\d+\])/)
            .map((item: string) => item.trim())
            .filter((item): item is string => item.length > 0)

        return items.map((item) => `> ${item}`).join("\n")
    })

    result = result.replace(/^>\s*(.+)$/gm, (line: string, body: string) => {
        if (/<br\s*\/?>/i.test(body)) return line

        const match = body.match(/^(\*\*[^*]+\*\*)\s+(.+)$/u)
        if (!match) return line

        return `> ${match[1]}\n> ${match[2]}`
    })

    return result
}
