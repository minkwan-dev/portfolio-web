type PostEditorShellProps = {
    children: React.ReactNode
}

export function PostEditorShell({ children }: PostEditorShellProps) {
    return <div className="flex h-dvh flex-col bg-white text-black">{children}</div>
}
