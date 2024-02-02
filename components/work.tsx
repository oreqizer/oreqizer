import * as React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

export default function Work({
  title,
  description,
  position,
  timeline,
  link,
  src,
  responsibilities,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  position: React.ReactNode;
  timeline: React.ReactNode;
  link: string;
  src: StaticImageData;
  responsibilities?: React.ReactNode[];
}): React.JSX.Element {
  return (
    <div className="my-4 space-y-4 border-2 border-black p-4 dark:border-white">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xl font-bold">{title}</div>

          <div>{link}</div>
        </div>

        <Image
          alt=""
          className="max-h-16 max-w-24 justify-self-center object-contain p-2 dark:bg-white"
          src={src}
        />
      </div>

      <div className="space-y-2">
        <div>{description}</div>

        <div className="font-bold">{position}</div>

        <div className="text-sm">{timeline}</div>

        {responsibilities !== undefined && responsibilities.length > 0 && (
          <ul className="md:ml-4">
            {responsibilities.map((item, i) => (
              // eslint-disable-next-line react/no-array-index-key -- static list
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
