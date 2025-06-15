import { StackVertical } from "@/common-components/layout-stack/layout-stack";

import BaseContainer from "@/common-components/base-container/base-container";
import { ProjectHeader } from "./_components/ProjectHeader";
import { ProjectCard } from "./_components/ProjectCard";
import { projects } from "./_data/projects";
import { SectionFooter } from "@/common-components/footer/SectionFooter";
export default function Projects() {
    return (
        <>
            <BaseContainer size="md" paddingX="md" paddingY="lg">
                <StackVertical gap="md">
                    <ProjectHeader />
                    <StackVertical gap="none">
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                isLast={index === projects.length - 1}
                            />
                        ))}
                    </StackVertical>
                </StackVertical>
            </BaseContainer>
            <SectionFooter color="purple" showToTop={false} />
        </>
    )
}