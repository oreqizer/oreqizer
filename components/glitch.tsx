import * as React from 'react';
import styles from './glitch.module.css';

export default function Glitch({
  children,
}: {
  children: string;
}): React.JSX.Element {
  return (
    <h1
      className={`frame my-0 p-4 text-4xl md:text-7xl ${styles.glitch}`}
      data-text={children}
    >
      {children}
    </h1>
  );
}
