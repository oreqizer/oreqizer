import * as React from 'react';

export default function ListBlocks({
  list,
}: {
  list: string[];
}): React.JSX.Element {
  return (
    <ul className="mx-0 mb-4 flex flex-wrap items-center">
      {list.map((item) => (
        <li
          className="mb-3 mr-3 inline-block whitespace-nowrap border-2 border-black p-2 dark:border-white"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
