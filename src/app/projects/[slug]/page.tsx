import { notFound } from 'next/navigation';
import { references } from '@/app/_data/posts';
import { Project } from '@/app/_types/project';

// Define the params type
type PageParams = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return references.map((project: Project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = references.find((p: Project) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Project Not Found | sidhartha.dev',
      description: 'The requested project could not be found.',
    };
  }
  
  const title = `${post.title} | sidhartha.dev`;
  const description = post.description;
  const imageUrl = post.image || `/images/projects/${slug}/cover.jpg`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Main page component
// This page will be statically generated at build time
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Find the matching project
  const post = references.find((p: Project) => p.slug === slug);
  
  // If no matching post is found, return 404
  if (!post) {
    notFound();
  }

  try {
    // For static export, we'll render a simple page with the project data
    // instead of dynamically importing components
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg mb-4">{post.description}</p>
        <div className="prose dark:prose-invert max-w-none">
          {post.content && <p>{post.content}</p>}
          {!post.content && (
            <p>Project details coming soon. Please check back later.</p>
          )}
        </div>
        {post.githubUrl && (
          <a 
            href={post.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View on GitHub
          </a>
        )}
      </div>
    );
  } catch (error) {
    console.error(`Failed to render project page for ${slug}:`, error);
    notFound();
  }
}

// Disable dynamic params for static export
export const dynamicParams = false;