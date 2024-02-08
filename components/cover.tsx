import * as React from 'react';
import Image from 'next/image';
import me from '@/app/me.jpeg';
import Glitch from '@/components/glitch';

export default function Cover(): React.JSX.Element {
  return (
    <div className="relative mb-12 md:mb-24">
      <Image alt="Boris Petrenko" priority src={me} />

      <div className="my-2 w-full md:absolute md:-bottom-12 md:left-2 md:my-0">
        <Glitch>Boris Petrenko</Glitch>
      </div>
    </div>
  );
}
