'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter"
import Link from "next/link"

export default function LearningUtensils() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { href: '/learning', label: 'Learning' },
                            { label: 'Learning Utensils' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                <TextHeading as="h1" weight="bold" className="mb-2">
                    Learning Resources
                </TextHeading>
                <Text variant="muted" className="mb-8">
                    Curated list of resources for competitive programming and DSA mastery
                </Text>

                <StackVertical gap="lg">
                    {/* Cohort 2.0 */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                        <TextHeading as="h3" weight="bold" className="text-lg mb-3">
                            <Link href="https://harkirat.metacommunity.dev/cohorts" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                                Cohort 2.0 by Harkirat Singh →
                            </Link>
                        </TextHeading>
                        <Text className="mb-3">
                            A comprehensive full-stack development course with a strong focus on DSA and system design.
                        </Text>
                        <Text variant="muted" size="sm">
                            Focus: Full-stack Development · DSA · System Design
                        </Text>
                    </div>

                    {/* Aditya Verma DP Series */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                        <TextHeading as="h3" weight="bold" className="text-lg mb-3">
                            <Link href="https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                                Dynamic Programming Playlist by Aditya Verma →
                            </Link>
                        </TextHeading>
                        <Text className="mb-3">
                            One of the best resources for mastering Dynamic Programming, covering all patterns and problem variations.
                        </Text>
                        <Text variant="muted" size="sm">
                            Focus: Dynamic Programming · Problem Solving · Interview Preparation
                        </Text>
                    </div>

                    {/* Graph Series with Mike */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                        <TextHeading as="h3" weight="bold" className="text-lg mb-3">
                            <Link href="https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                                Graph Algorithms Playlist by William Fiset →
                            </Link>
                        </TextHeading>
                        <Text className="mb-3">
                            Comprehensive coverage of graph theory and algorithms, essential for competitive programming.
                        </Text>
                        <Text variant="muted" size="sm">
                            Focus: Graph Theory · Algorithms · Competitive Programming
                        </Text>
                    </div>

                    {/* Additional Resources */}
                    <div className="mt-8">
                        <TextHeading as="h3" weight="bold" className="text-lg mb-4">Additional Resources</TextHeading>
                        <ul className="space-y-3">
                            <li>
                                <Link href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                                    Codeforces
                                </Link> - For competitive programming practice and contests
                            </li>
                            <li>
                                <Link href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                                    LeetCode
                                </Link> - For interview preparation and DSA practice
                            </li>
                            <li>
                                <Link href="https://codeforces.com/blog/predownload" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                                    Codeforces Ladders
                                </Link> - For structured problem-solving practice
                            </li>
                        </ul>
                    </div>
                </StackVertical>
            </div>

            </StackVertical>

            <IndividualPageFooter sectionName={`Learning`} showToTop={false} />

        </BaseContainer>
    )
}