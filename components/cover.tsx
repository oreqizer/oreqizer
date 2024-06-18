import * as React from 'react';
import Glitch from '@/components/glitch';

export default function Cover({
  image,
  title,
}: {
  image?: React.ReactNode;
  title: string;
}): React.JSX.Element {
  return (
    <div className="relative mb-12 md:mb-24">
      {image}

      <div
        className={`my-2 w-full ${image === undefined ? '' : 'md:absolute md:-bottom-12 md:left-2 md:my-0'}`}
      >
        <Glitch>{title}</Glitch>
      </div>
    </div>
  );
}
