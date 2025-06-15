'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import { SectionFooter } from "@/common-components/footer/SectionFooter"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import Link from "next/link"
import Ruler from "@/common-components/ruler/ruler"

export default function Learning() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { label: 'Learning' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                <TextHeading as="h1" weight="bold">
                    Learning
                </TextHeading>
                <Text variant="muted" className="mb-8">
                    My journey through competitive programming and DSA. Tracking progress, resources, and key learnings.
                </Text>

                <StackVertical gap="md" className="max-w-2xl">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <TextHeading as="h3" weight="bold" className="text-lg mb-3">
                            <Link href="/learning/weekly-reflections/" className="hover:text-purple-500">
                                Weekly Progress Tracker →
                            </Link>
                        </TextHeading>
                        <Text variant="muted">
                            Weekly updates on my competitive programming journey, problems solved, and key learnings.
                        </Text>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <TextHeading as="h3" weight="bold" className="text-lg mb-3">
                            <Link href="/learning/learning-utensils/" className="hover:text-purple-500">
                                Learning Resources →
                            </Link>
                        </TextHeading>
                        <Text variant="muted">
                            Curated list of resources including Cohort 2.0, Aditya Verma's DP series, and more.
                        </Text>
                    </div>
                </StackVertical>
            </div>
            </StackVertical>
            <SectionFooter color="purple" showToTop={false} />
        </BaseContainer>
    )
}