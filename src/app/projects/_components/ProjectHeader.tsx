import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import Text from "@/common-components/text/text"
import TextHeading from "@/common-components/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"

export function ProjectHeader() {
    return (
        <StackVertical gap="md">
            <title>Projects | sidhartha.dev </title>

            <div className="flex items-center justify-between">
                <DynamicBreadcrumb 
                    items={[
                        { href: '/', label: 'Home', emoji: '👾' },
                        { label: 'Projects' }
                    ]}
                />
                <ThemeToggle />
            </div>

            <div>
                <TextHeading as="h1" weight="bold">
                    Projects
                </TextHeading>
                <Text variant="muted" size="sm">
                    A showcase of my recent projects and developments, featuring innovative solutions and modern technologies.
                </Text>
            </div>
        </StackVertical>
    )
} 