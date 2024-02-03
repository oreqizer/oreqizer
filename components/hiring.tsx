import * as React from 'react';

export default function Hiring(): React.JSX.Element {
  return (
    <div className="my-12 whitespace-nowrap text-center text-2xl font-bold sm:text-5xl">
      <span className="text-glitch-red">&gt;</span>
      <span className="text-glitch-blue">&gt; </span>
      <a
        className="text-white"
        href="mailto:boris@oreqizer.com?subject=Hey%20Boris,%20come%20work%20for%20us!%20💰"
      >
        <span>OPEN FOR HIRE</span>
      </a>
      <span className="text-glitch-blue"> &lt;</span>
      <span className="text-glitch-red">&lt;</span>
    </div>
  );
}
