import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://boris.lol'),
  title: 'Boris Petrenko',
  description: "Software engineer. You name it, I'll build it 🏗",
  openGraph: {
    type: 'website',
    url: 'https://boris.lol',
    title: 'Boris Petrenko',
    description: "Software engineer. You name it, I'll build it 🏗",
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@oreqizer',
    title: 'Boris Petrenko',
    description: "Software engineer. You name it, I'll build it 🏗",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background font-mono text-base text-ink md:text-lg dark:bg-dark-background dark:text-dark-ink">
          <div className="mx-auto max-w-2xl p-2">{children}</div>
        </main>

        <Analytics />
      </body>
    </html>
  );
}
