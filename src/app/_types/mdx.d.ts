// This file provides type definitions for MDX files
declare module '*.mdx' {
  import { ComponentType } from 'react';
  
  const MDXComponent: ComponentType;
  export default MDXComponent;
  
  // Add any frontmatter types if needed
  export const frontMatter: {
    title?: string;
    description?: string;
    date?: string;
    tags?: string[];
    [key: string]: any;
  };
}
