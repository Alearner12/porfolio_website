// Type definitions for Next.js
import 'next';

declare module 'next' {
  export interface NextApiRequest {
    // Add any custom properties to the request object here
    user?: any;
  }

  export interface NextApiResponse {
    // Add any custom methods to the response object here
    // Example: json: (body: any) => void;
  }
}

// Add type declarations for next/link
declare module 'next/link' {
  import { ComponentType, AnchorHTMLAttributes } from 'react';
  
  export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    children?: React.ReactNode;
  }
  
  const Link: ComponentType<LinkProps>;
  export default Link;
}

// Add type declarations for next/image
declare module 'next/image' {
  import { ImgHTMLAttributes, ComponentType } from 'react';
  
  export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading'> {
    src: string | StaticImport;
    width: number;
    height: number;
    alt: string;
    loader?: ImageLoader;
    quality?: number | string;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
    objectFit?: ImgHTMLAttributes<HTMLImageElement>['style']['objectFit'];
    objectPosition?: ImgHTMLAttributes<HTMLImageElement>['style']['objectPosition'];
    onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void;
  }
  
  export type ImageLoader = (resolverProps: ImageLoaderProps) => string;
  
  export interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
  }
  
  export interface StaticImport {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  }
  
  const Image: ComponentType<ImageProps>;
  export default Image;
}
