import Link from "next/link"
import { cn } from "@/styles/lib/utils"
import { StackVertical, StackHorizontal } from "@/common-components/layout-stack/layout-stack"
import Text from "@/common-components/text/text"
import TextHeading from "@/common-components/text-heading/text-heading"
import { Project } from "../_types/project"
import { Github, ExternalLink } from "lucide-react"
import { ImageCarousel } from "./ImageCarousel"

export function ProjectCard({ project, isLast }: { project: Project; isLast?: boolean }) {
    return (
        <div className="group">
            <article className="py-6">
                <StackVertical gap="md">
                    <div>
                        <TextHeading 
                            as="h3" 
                            weight="bold" 
                            className="text-lg mb-2"
                        >
                            {project.title}
                        </TextHeading>
                        <Text 
                            variant="muted"
                            size="sm"
                            className="mb-4"
                        >
                            {project.description}
                        </Text>
                    </div>

                    {/* Image Carousel */}
                    <div className="mb-6">
                        <ImageCarousel 
                            images={project.images} 
                            title={project.title} 
                        />
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                        <Text variant="muted" size="xs" className="mb-2">Technologies:</Text>
                        <StackHorizontal gap="xs">
                            {project.technologies.map((tech, index) => (
                                <span 
                                    key={index}
                                    className={cn(
                                        "px-2 py-1 text-xs rounded-full",
                                        "bg-purple-100 text-purple-800",
                                        "dark:bg-purple-900 dark:text-purple-200"
                                    )}
                                >
                                    {tech}
                                </span>
                            ))}
                        </StackHorizontal>
                    </div>

                    {/* GitHub Link */}
                    <div className="flex justify-end">
                        <Link 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "inline-flex items-center justify-center w-10 h-10 rounded-full",
                                "bg-gray-200 text-gray-700 hover:bg-gray-300",
                                "dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
                                "transition-colors duration-200",
                                "hover:scale-110 transform transition-transform"
                            )}
                            aria-label="View on GitHub"
                        >
                            <Github size={20} />
                        </Link>
                    </div>
                </StackVertical>
            </article>
            
            {/* Separator line */}
            {!isLast && (
                <hr className="border-gray-500/20" />
            )}
        </div>
    )
} 