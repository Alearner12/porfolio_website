import { Project } from '../_types/project';

// Export the project data
export const references: Project[] = [
  {
    id: 1,
    slug: 'example-project',
    title: 'Example Project',
    description: 'This is an example project',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    date: '2025-06-15',
    tags: ['web', 'example'],
    featured: true,
    githubUrl: 'https://github.com/yourusername/example-project',
    demoUrl: 'https://example.com',
    image: '/images/projects/example.jpg',
    content: 'This is the full content of the example project.'
  },
  {
    id: 2,
    slug: 'another-project',
    title: 'Another Project',
    description: 'This is another example project',
    technologies: ['React', 'Node.js', 'MongoDB'],
    date: '2025-05-20',
    tags: ['web', 'fullstack'],
    featured: false,
    githubUrl: 'https://github.com/yourusername/another-project',
    image: '/images/projects/another.jpg',
    content: 'This is the full content of another project.'
  }
];
