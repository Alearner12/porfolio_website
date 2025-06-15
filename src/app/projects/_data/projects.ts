import { Project } from "../../_types/project"

export const projects: Project[] = [
    {
        id: 1,
        title: "Codeforces Helper",
        description: "A powerful web application for competitive programmers to discover and practice problems from Codeforces. Features include advanced filtering by contest division, problem rating, and tags, along with a clean, responsive interface with dark/light mode support.",
        githubUrl: "https://github.com/Alearner12/cfhelper",
        images: [
            "/project1/1.png",
            "/project1/2.png",
            "/project1/3.png",
            "/project1/4.png"
        ],
        technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Codeforces API"]
    },
    {
        id: 2,
        title: "Same.dev",
        description: "An AI-powered screenshot-to-code tool that converts images into pixel-perfect HTML/CSS code using GPT-4 Vision API. Built with modern React, TypeScript, and Node.js.",
        githubUrl: "https://github.com/Alearner12/same",
        images: [
            "/project2/1.png",
            "/project2/2.png",
            "/project2/3.png",
            "/project2/4.png"
        ],
        technologies: ["React", "TypeScript", "Node.js", "GPT-4 Vision API", "AI/ML", "Next.js"]
    }
] 