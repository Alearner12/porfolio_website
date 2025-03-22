import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Notes | sidhartha.dev',
    description: 'A collection of my notes on various topics.',
}

export default function Notes({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 