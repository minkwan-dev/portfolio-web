"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type PostMarkdownBodyProps = {
  content: string
}

export function PostMarkdownBody({ content }: PostMarkdownBodyProps) {
    return (
    <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-a:text-gray-900 prose-a:underline prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:bg-gray-950 prose-pre:p-4 prose-pre:text-gray-100">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    </div>
    )
}