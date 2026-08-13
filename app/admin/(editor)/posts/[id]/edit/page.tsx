import AdminPostEditorPage from "@/feature/admin-post/editor-page"

type Props = {
    params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
    const { id } = await params
    return <AdminPostEditorPage postId={Number(id)} />
}

export const dynamic = "force-dynamic"
