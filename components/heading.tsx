import * as React from 'react';
import styles from './heading.module.css';

export default function Heading({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div
      className={`relative z-10 mb-6 mt-12 inline-block ${styles.glitch ?? ''}`}
    >
      <h1 className="frame m-0 px-3">{children}</h1>
    </div>
  );
}
