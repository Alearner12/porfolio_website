export interface Project {
  id: number;
  title: string;
  description: string;
  slug: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
  date: string;
  content?: string;
  tags?: string[];
}
