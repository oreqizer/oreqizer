import * as React from 'react';

export default function Hiring(): React.JSX.Element {
  return (
    <div className="my-12 space-y-6 text-center">
      <div className="my-12 whitespace-nowrap text-center text-2xl font-bold sm:text-5xl">
        <span className="text-glitch-red">&gt;</span>
        <span className="text-glitch-blue">&gt; </span>
        <a
          className="text-black dark:text-white"
          href="mailto:boris@oreqizer.com?subject=Hey%20Boris,%20come%20work%20for%20us!%20💰"
        >
          <span>OPEN FOR HIRE</span>
        </a>
        <span className="text-glitch-blue"> &lt;</span>
        <span className="text-glitch-red">&lt;</span>
      </div>

      <div className="text-xl sm:text-2xl">
        Hiring me you get the <strong>power of four engineers</strong> for the{' '}
        <strong>price of two</strong>!
      </div>
      <div className="text-xl sm:text-2xl">
        Interested in <strong>stable full-remote</strong> jobs.
        <span aria-hidden>✨</span>
      </div>
    </div>
  );
}
