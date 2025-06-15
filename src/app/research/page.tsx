import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter"
import Link from "next/link"

export default function Research() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { label: 'Research' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                    <TextHeading as="h1" weight="bold" className="mb-2">
                        Research Work
                    </TextHeading>
                    <Text variant="muted" className="mb-8">
                        Exploring the intersection of technology and innovation through academic research.
                    </Text>

                    <div className="space-y-8">
                        {/* Research Paper 1 */}
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <TextHeading as="h2" weight="bold" className="text-xl mb-2">
                                Physics-Informed Neural Networks: Bridging Data and Physics
                            </TextHeading>
                            <Text className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                Published: June 2025 | Machine Learning | Computational Physics
                            </Text>
                            <div className="space-y-4">
                                <Text>
                                    This research paper explores the application of Physics-Informed Neural Networks (PINNs) in solving complex physical systems. The study focuses on developing novel approaches to incorporate physical laws and constraints into deep learning models, enabling more accurate and interpretable predictions in scientific computing.
                                </Text>
                                <div className="space-y-2">
                                    <Text className="font-medium">Key Contributions:</Text>
                                    <ul className="list-disc pl-5 space-y-1 text-foreground">
                                        <li>Novel architecture for handling partial differential equations in neural networks</li>
                                        <li>Analysis of PINN performance across different physical systems</li>
                                        <li>Techniques for improving training stability and convergence</li>
                                        <li>Case studies demonstrating applications in quantum mechanics and reaction-diffusion systems</li>
                                        <li>Benchmarking against traditional numerical methods</li>
                                    </ul>
                                </div>
                                <Text>
                                    The research demonstrates how PINNs can effectively learn and generalize physical laws from data while respecting underlying physical constraints, offering a promising direction for scientific machine learning applications.
                                </Text>
                                <Text className="text-sm text-muted-foreground italic">
                                    Note: This paper represents ongoing research in the field of scientific machine learning.
                                </Text>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
                            <Text className="text-gray-500 dark:text-gray-400">
                                More research work coming soon...
                            </Text>
                        </div>
                    </div>
                </div>
            </StackVertical>

            <IndividualPageFooter sectionName="Research" showToTop={true} />
        </BaseContainer>
    )
}
