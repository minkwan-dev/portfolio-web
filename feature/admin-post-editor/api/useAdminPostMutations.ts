"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import {
    createAdminPost,
    deleteAdminPost,
    updateAdminPost,
} from "@/feature/admin-post-editor/api/adminPostEditorApi"
import { adminPostEditorKeys } from "@/feature/admin-post-editor/api/adminPostEditorQueryKeys"
import type { SavePostInput } from "@/feature/admin-post-editor/model/post-editor.types"
import { adminPostListKeys } from "@/feature/admin-post-list/api/adminPostListQueryKeys"
import { blogListKeys } from "@/feature/blog-list/api/blogListQueryKeys"

export function useCreateAdminPostMutation() {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: (input: SavePostInput) => createAdminPost(input),
        onSuccess: (post) => {
            void queryClient.invalidateQueries({ queryKey: adminPostListKeys.all })
            void queryClient.invalidateQueries({ queryKey: blogListKeys.all })
            router.push(`/admin/posts/${post.id}/edit`)
        },
    })
}

export function useUpdateAdminPostMutation(postId: number) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (input: Partial<SavePostInput>) => updateAdminPost(postId, input),
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: adminPostEditorKeys.detail(postId) })
            void queryClient.invalidateQueries({ queryKey: adminPostListKeys.all })
            void queryClient.invalidateQueries({ queryKey: blogListKeys.all })
        },
    })
}

export function useDeleteAdminPostMutation(postId: number) {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: () => deleteAdminPost(postId),
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: adminPostListKeys.all })
            void queryClient.invalidateQueries({ queryKey: blogListKeys.all })
            router.push("/admin/posts")
        },
    })
}
