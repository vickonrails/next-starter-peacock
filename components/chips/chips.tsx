import Link from 'next/link';
import React from 'react';

export const Chips = ({ items }) => {
  return (
    <ul className="list-none flex flex-wrap pl-0">
      {items.map((tag: string[], index: number) => (
        <li key={index} className="mr-2 text-sm mb-2 transition-all bg-[#202020] hover:shadow-glow">
          <Link href={`tags/${tag}`} className="py-1 px-2 inline-block">
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};
