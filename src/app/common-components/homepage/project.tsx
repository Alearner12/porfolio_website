'use client'

import { motion } from 'framer-motion'
import { StackVertical } from '@/common-components/layout-stack/layout-stack'
import TextHeading from '@/common-components/text-heading/text-heading'
import Text from '@/common-components/text/text'
import Link from 'next/link'
import Image from 'next/image'

export function ProjectSection() {
    const projects = [
        {
            title: "Project Alpha",
            description: "A project that explores the depths of AI.",
            imageUrl: "/project-alpha.jpg",
            link: "/projects/alpha"
        },
        {
            title: "Project Beta",
            description: "A web development project that pushes boundaries.",
            imageUrl: "/project-beta.jpg",
            link: "/projects/beta"
        },
        {
            title: "Project Gamma",
            description: "A comprehensive dive into data visualization.",
            imageUrl: "/project-gamma.jpg",
            link: "/projects/gamma"
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pb-8"
        >
            <StackVertical gap="md">
                <TextHeading as="h2" className="font-bold text-xl sm:text-2xl md:text-3xl">
                    My Projects
                </TextHeading>
                <Text variant="muted" size="sm">
                    A showcase of the projects I've worked on, spanning various domains of technology.
                </Text>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <div className="relative w-full aspect-w-16 aspect-h-9">
                                <Image
                                    className="object-cover"
                                    fill
                                    src={project.imageUrl}
                                    alt={project.title}
                                />
                            </div>
                            <div className="p-4">
                                <TextHeading as="h3" className="font-bold text-lg">
                                    {project.title}
                                </TextHeading>
                                <Text variant="muted" size="sm">
                                    {project.description}
                                </Text>
                                <Link href={project.link} className="text-purple-500 font-bold hover:underline">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </StackVertical>
        </motion.div>
    )
}
