import type { MDXComponents } from 'mdx/types';
import Heading from '@/components/heading';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <Heading>{children}</Heading>,
  };
}
