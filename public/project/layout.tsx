// src/app/project/page.tsx

'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import Link from "next/link"
import Ruler from "@/common-components/ruler/ruler"

// Main content for the Projects page
export default function Projects() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { label: 'Projects' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                    <TextHeading as="h1" weight="bold">
                        Projects
                    </TextHeading>
                    <Text variant="muted" className="mb-8">
                        A showcase of my personal and professional projects.
                    </Text>

                    {/* List of Projects */}
                    <StackVertical gap="lg">
                        <Text className="underline font-bold hover:text-purple-500">
                            <Link href="/project/project-1">Project 1: Machine Learning Model</Link> 
                        </Text>
                        <Text className="underline font-bold hover:text-purple-500">
                            <Link href="/project/project-2">Project 2: Web Scraper</Link> 
                        </Text>
                        <Text className="underline font-bold hover:text-purple-500">
                            <Link href="/project/project-3">Project 3: Portfolio Website</Link> 
                        </Text>
                    </StackVertical>
                </div>
            </StackVertical>
        </BaseContainer>
    )
}