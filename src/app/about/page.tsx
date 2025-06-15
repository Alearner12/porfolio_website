'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import { SectionFooter } from "@/common-components/footer/SectionFooter"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"

export default function About() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { label: 'About' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                    <TextHeading as="h1" weight="bold">
                        About
                    </TextHeading>
                    <Text variant="muted" size="xs" className="mb-8">Last updated: March 22, 2025</Text>
                    <StackVertical gap="md">
                        <Text>
                            Hey! I’m Sidhartha — a Computer Science student and aspiring software engineer with a deep interest in low-level optimization, game development, and artificial intelligence.
                        </Text>
                        <Text>
                            I’ve always been fascinated by how things work under the hood — from how bridges hold massive weights to how rockets defy gravity. That curiosity naturally extended into computers, algorithms, and building things from scratch.
                        </Text>
                        <Text>
                            While my academic journey started with computer science, I’ve had my own detours, moments of frustration, and self-discovery along the way. What truly changed my path was diving deeper into problem-solving, machine learning, and low-level programming — realizing how much I enjoy creating and optimizing at the core level.
                        </Text>
                        <Text>
                            Over time, I’ve been fortunate to work on interesting projects, push my boundaries, and connect with amazing communities. My journey has had its ups and downs, but every challenge has pushed me closer to becoming the person and engineer I aspire to be.
                        </Text>
                        <Text>
                            I like to think of progress as a number line — starting from moments of uncertainty (the negative side), building up step by step, until hitting that point where everything aligns, and the real journey begins. For me, that starting line is now.
                        </Text>
                        <Text>
                            I’m excited to keep learning, building, and connecting with others who love exploring tech, math, and creative problem-solving. If you’re reading this — thanks for stopping by, and I hope we cross paths!
                        </Text>
                    </StackVertical>
                </div>
            </StackVertical>
            <SectionFooter color="purple" />
        </BaseContainer>
    )
}
