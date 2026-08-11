"use client"

import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import { postMarkdownComponents } from "@/feature/blog-detail/components/postDetailSection/postMarkdownComponents"
import { preprocessMarkdown } from "@/feature/blog-detail/utils/preprocess-markdown"

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
