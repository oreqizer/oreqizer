import createMDX from '@next/mdx';
import remarkEmoji from 'remark-emoji';
import remarkSlug from 'remark-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  experimental: {
    mdxRs: true,
  },
  options: {
    // Emoji list at https://github.com/muan/emojilib/releases/tag/v2.4.0
    remarkPlugins: [remarkGfm, [remarkEmoji, { accessible: true }], remarkSlug],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
