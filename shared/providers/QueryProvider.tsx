"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { ToastProvider } from "@/shared/providers/ToastProvider"

type QueryProviderProps = {
    children: React.ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
    const [queryClient] = useState(() => 
        new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 60 * 1000,
                    retry: 1,
                    refetchOnWindowFocus: false,
                }
            }
        }))
        
        return (
            <QueryClientProvider client={queryClient}>
                <ToastProvider>{children}</ToastProvider>
            </QueryClientProvider>
        )
}