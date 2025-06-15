// Type definitions for Next.js navigation
declare module 'next/navigation' {
  import { ReadonlyURLSearchParams } from 'next/navigation';

  // Navigation types
  export type Pathname = string;
  export type SearchParams = { [key: string]: string | string[] | undefined };

  // useRouter hook
  export function useRouter(): {
    push(href: string, options?: { scroll?: boolean }): Promise<boolean>;
    replace(href: string, options?: { scroll?: boolean }): Promise<boolean>;
    prefetch(href: string): Promise<void>;
    back(): void;
    forward(): void;
    refresh(): void;
    prefetch(href: string): void;
    push(href: string): Promise<boolean>;
    replace(href: string): Promise<boolean>;
    back(): void;
    forward(): void;
    refresh(): void;
    prefetch(href: string): void;
  };

  // usePathname hook
  export function usePathname(): string | null;

  // useSearchParams hook
  export function useSearchParams(): ReadonlyURLSearchParams;

  // useParams hook
  export function useParams(): Record<string, string | string[]>;

  // useSelectedLayoutSegment hook
  export function useSelectedLayoutSegment(parallelRouteKey?: string): string | null;

  // useSelectedLayoutSegments hook
  export function useSelectedLayoutSegments(parallelRouteKey?: string): string[];

  // useServerInsertedHTML hook
  export function useServerInsertedHTML(
    callback: () => React.ReactNode
  ): void;

  // notFound function
  export function notFound(): never;

  // redirect function
  export function redirect(path: string): never;
  export function redirect(
    path: string,
    type: 'replace' | 'push'
  ): never;

  // permanentRedirect function
  export function permanentRedirect(path: string): never;
  export function permanentRedirect(
    path: string,
    type: 'replace' | 'push'
  ): never;

  // useRouter hook (client-side only)
  export function useRouter(): {
    push(href: string, options?: { scroll?: boolean }): Promise<boolean>;
    replace(href: string, options?: { scroll?: boolean }): Promise<boolean>;
    refresh(): void;
    back(): void;
    forward(): void;
    prefetch(href: string): void;
  };

  // useSearchParams hook (client-side only)
  export function useSearchParams(): ReadonlyURLSearchParams;

  // usePathname hook (client-side only)
  export function usePathname(): string | null;

  // useParams hook (client-side only)
  export function useParams(): Record<string, string | string[]>;

  // useSelectedLayoutSegment hook (client-side only)
  export function useSelectedLayoutSegment(parallelRouteKey?: string): string | null;

  // useSelectedLayoutSegments hook (client-side only)
  export function useSelectedLayoutSegments(parallelRouteKey?: string): string[];

  // useServerInsertedHTML hook (server-side only)
  export function useServerInsertedHTML(
    callback: () => React.ReactNode
  ): void;

  // notFound function (server-side only)
  export function notFound(): never;

  // redirect function (server-side only)
  export function redirect(path: string): never;
  export function redirect(
    path: string,
    type: 'replace' | 'push'
  ): never;

  // permanentRedirect function (server-side only)
  export function permanentRedirect(path: string): never;
  export function permanentRedirect(
    path: string,
    type: 'replace' | 'push'
  ): never;
}
