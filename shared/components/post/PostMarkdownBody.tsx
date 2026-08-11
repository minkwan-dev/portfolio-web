"use client"

import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import { postMarkdownComponents } from "@/shared/components/post/postMarkdownComponents"
import { preprocessMarkdown } from "@/shared/utils/preprocess-markdown"

type PostMarkdownBodyProps = {
    content: string
}

export function PostMarkdownBody({ content }: PostMarkdownBodyProps) {
    const normalizedContent = preprocessMarkdown(content)

    return (
        <div>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw]}
                components={postMarkdownComponents}
            >
                {normalizedContent}
            </ReactMarkdown>
        </div>
    )
}
