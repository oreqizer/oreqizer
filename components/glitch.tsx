import * as React from 'react';
import styles from './glitch.module.css';

export default function Glitch({
  children,
}: {
  children: string;
}): React.JSX.Element {
  return (
    <h1
      className={`frame p-4 text-5xl md:text-7xl ${styles.glitch}`}
      data-text={children}
    >
      {children}
    </h1>
  );
}
