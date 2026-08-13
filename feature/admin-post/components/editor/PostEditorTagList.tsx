type PostEditorTagListProps = {
    tags: string[]
}

export function PostEditorTagList({ tags }: PostEditorTagListProps) {
    if (tags.length === 0) {
        return null
    }

    return (
        <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                >
                    #{tag}
                </span>
            ))}
        </div>
    )
}
