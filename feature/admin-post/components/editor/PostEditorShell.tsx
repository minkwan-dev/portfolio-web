type PostEditorShellProps = {
    children: React.ReactNode
}

export function PostEditorShell({ children }: PostEditorShellProps) {
    return <div className="flex min-h-0 flex-1 flex-col bg-white text-black">{children}</div>
}
