"use client"

import Image from "next/image"
import type { Components } from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import {
    extractMarkdownCodeString,
    resolveMarkdownLanguage,
} from "@/shared/utils/markdown-code"

export const postMarkdownComponents: Components = {
    h1({ children }) {
        return (
            <h2 className="mt-12 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold text-black sm:text-3xl">
                {children}
            </h2>
        )
    },
    h2({ children }) {
        return (
            <h3 className="mt-10 mb-3 text-xl font-bold text-black sm:text-2xl">
                {children}
            </h3>
        )
    },
    h3({ children }) {
        return (
            <h4 className="mt-8 mb-2 text-lg font-semibold text-black">
                {children}
            </h4>
        )
    },
    h4({ children }) {
        return (
            <h5 className="mt-6 mb-2 text-base font-semibold text-black">
                {children}
            </h5>
        )
    },
    p({ children }) {
        return (
            <p className="my-4 text-base leading-7 whitespace-pre-wrap text-gray-800">
                {children}
            </p>
        )
    },
    ul({ children }) {
        return (
            <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">
                {children}
            </ul>
        )
    },
    ol({ children }) {
        return (
            <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-800">
                {children}
            </ol>
        )
    },
    li({ children }) {
        return <li className="leading-7">{children}</li>
    },
    blockquote({ children }) {
        return (
            <blockquote className="my-6 border-l-4 border-gray-300 bg-gray-50 px-4 py-4 text-sm leading-7 text-gray-700 not-italic [&_a]:font-medium [&_a]:text-gray-900 [&_a]:underline [&_a]:underline-offset-2 [&_p]:my-3 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0 [&_p]:whitespace-pre-wrap [&_strong]:font-semibold [&_strong]:text-gray-900">
                {children}
            </blockquote>
        )
    },
    hr() {
        return <hr className="my-10 border-gray-200" />
    },
    a({ href, children }) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-gray-900 underline underline-offset-2"
            >
                {children}
            </a>
        )
    },
    pre({ children }) {
        return <>{children}</>
    },
    code({ className, children, ...props }) {
        const code = extractMarkdownCodeString(children)
        const language = resolveMarkdownLanguage(className)
        const isBlock = Boolean(language) || code.includes("\n")

        if (isBlock) {
            return (
                <SyntaxHighlighter
                    language={language ?? "text"}
                    style={oneDark}
                    PreTag="div"
                    CodeTag="code"
                    customStyle={{
                        margin: "1.5rem 0",
                        borderRadius: "0.75rem",
                        padding: "1rem",
                        fontSize: "0.875rem",
                        lineHeight: "1.625",
                        background: "#0d1117",
                    }}
                    codeTagProps={{
                        className: className,
                        ...props,
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            )
        }

        return (
            <code
                className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.875em] text-gray-900"
                {...props}
            >
                {children}
            </code>
        )
    },
    table({ children }) {
        return (
            <div className="my-6 overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-sm">
                    {children}
                </table>
            </div>
        )
    },
    thead({ children }) {
        return <thead className="bg-gray-50">{children}</thead>
    },
    th({ children }) {
        return (
            <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-900">
                {children}
            </th>
        )
    },
    td({ children }) {
        return (
            <td className="border border-gray-200 px-3 py-2 align-top text-gray-700">
                {children}
            </td>
        )
    },
    img({ src, alt }) {
        if (!src || typeof src !== "string") return null

        return (
            <span className="my-6 block overflow-hidden rounded-xl">
                <Image
                    src={src}
                    alt={alt ?? ""}
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover"
                    unoptimized
                />
            </span>
        )
    },
}
