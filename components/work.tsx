import * as React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

export default function Work({
  title,
  description,
  link,
  src,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  link: string;
  src: StaticImageData;
}): React.JSX.Element {
  return (
    <div className="my-4 grid min-h-[6rem] w-full grid-cols-[6rem_1fr] items-center gap-1 border-2 border-black dark:border-white">
      <Image
        alt=""
        className="h-full w-full justify-self-center object-contain p-2 dark:bg-white"
        src={src}
      />

      <div className="gap-y-2 p-4">
        <div className="text-xl font-bold">{title}</div>

        <div>{description}</div>

        <div>{link}</div>
      </div>
    </div>
  );
}
