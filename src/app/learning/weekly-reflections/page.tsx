'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter"

export default function WeeklyReflections() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { href: '/learning', label: 'Learning' },
                            { label: 'Weekly Reflections' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                <TextHeading as="h1" weight="bold">
                    Weekly Reflections
                </TextHeading>
                    <Text variant="muted" className="mb-8">
                        My attempt at documenting, reflecting on, and being grateful for what I learned each week in my pursuit of knowledge.
                    </Text>

                <StackVertical gap="md">
                    <TextHeading as="h4" weight="bold">
                        Week 24, 2025 (Jun 10th - Jun 16th)
                    </TextHeading>
                    <Text className="space-y-4">
                        <p>This week I've been diving deep into AI-powered development tools and exploring how they can enhance my workflow. I've been particularly interested in the intersection of AI and web development.</p>
                        
                        <p>Key learnings:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Experimented with GPT-4 Vision API for generating code from screenshots</li>
                            <li>Explored new React Server Components patterns in Next.js 14</li>
                            <li>Started learning about AI-powered code completion tools and their integration with VS Code</li>
                        </ul>

                        <p>I'm particularly excited about the potential of AI to transform how we approach software development. The ability to generate boilerplate code, suggest improvements, and even help with debugging is changing the game.</p>
                        
                        <p>Current tech stack I'm working with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Next.js 14 with App Router</li>
                            <li>TypeScript 5.0+</li>
                            <li>Tailwind CSS for styling</li>
                            <li>Various AI APIs and SDKs</li>
                        </ul>
                    </Text>

                    <div className="mt-8">
                        <TextHeading as="h4" weight="bold">
                            Week 1, 2025 (Jan 1st - Jan 5th)
                        </TextHeading>
                        <Text>
                            Currently in the middle of my vacation here, will be back to learning in a week. Feels bad :(
                        </Text>
                    </div>
                </StackVertical>
            </div>

            </StackVertical>

            <IndividualPageFooter sectionName={`Learning`} showToTop={false} />

        </BaseContainer>
    )
}

