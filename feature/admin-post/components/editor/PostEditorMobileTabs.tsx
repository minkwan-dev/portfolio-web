type EditorMobilePane = "write" | "preview"

type PostEditorMobileTabsProps = {
    activePane: EditorMobilePane
    onChange: (pane: EditorMobilePane) => void
}

const tabClass = (isActive: boolean) =>
    `flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? "bg-black text-white" : "text-gray-500 hover:text-black"
    }`

export function PostEditorMobileTabs({ activePane, onChange }: PostEditorMobileTabsProps) {
    return (
        <div className="flex shrink-0 gap-1 border-b border-gray-200 bg-white px-4 py-2 lg:hidden">
            <button type="button" className={tabClass(activePane === "write")} onClick={() => onChange("write")}>
                작성
            </button>
            <button
                type="button"
                className={tabClass(activePane === "preview")}
                onClick={() => onChange("preview")}
            >
                미리보기
            </button>
        </div>
    )
}

export type { EditorMobilePane }
