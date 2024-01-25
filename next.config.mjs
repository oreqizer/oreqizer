import createMDX from '@next/mdx';
import remarkEmoji from 'remark-emoji';
import remarkSlug from 'remark-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/web-app-rendering-101',
        destination:
          'https://medium.com/code-kiwi-com/web-app-rendering-101-6ad2e01b0bb4',
        basePath: false,
        permanent: false,
      },
      {
        source: '/the-math-of-fitness',
        destination:
          'https://medium.com/@oreqizer/the-math-of-fitness-dbcf11971617',
        basePath: false,
        permanent: false,
      },
    ];
  },
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
