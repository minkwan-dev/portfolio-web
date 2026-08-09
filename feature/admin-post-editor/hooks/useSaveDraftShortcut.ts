"use client"

import { useEffect, useRef } from "react"

export function useSaveDraftShortcut(onSaveDraft: () => void, enabled = true) {
    const onSaveDraftRef = useRef(onSaveDraft)

    useEffect(() => {
        onSaveDraftRef.current = onSaveDraft
    }, [onSaveDraft])

    useEffect(() => {
        if (!enabled) return

        const handleKeyDown = (event: KeyboardEvent) => {
            const isSaveKey = event.key.toLowerCase() === "s"
            const isModifierPressed = event.metaKey || event.ctrlKey

            if (!isSaveKey || !isModifierPressed) return

            event.preventDefault()
            onSaveDraftRef.current()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [enabled])
}
