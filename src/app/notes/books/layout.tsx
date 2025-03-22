import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Books | sidhartha.dev',
    description: 'A collection of books I\'ve read and taken notes on.',
}

export default function Books({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 