import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import Glitch from '@/components/glitch';
import me from './me.png';
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
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background text-ink dark:bg-dark-background dark:text-dark-ink">
          <div className="mx-auto max-w-2xl p-2 font-mono">
            <div className="relative mb-8">
              <Image alt="Boris Petrenko" src={me} />

              <div className="my-6 w-full md:absolute md:bottom-2 md:left-2 md:my-0">
                <Glitch>Boris Petrenko</Glitch>
              </div>
            </div>

            <section className="text-base md:text-lg">{children}</section>
          </div>
        </main>

        <Analytics />
      </body>
    </html>
  );
}
