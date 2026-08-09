type AdminPageShellProps = {
    children: React.ReactNode
}

export function AdminPageShell({ children }: AdminPageShellProps) {
    return <div className="flex flex-1 flex-col bg-gray-50 text-black">{children}</div>
}
