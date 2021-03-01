import Link from "next/link";
import React from "react";
import { StyledChip } from "../styles/chips.styles";

export const Chips = ({ items }) => {
  return (
    <StyledChip>
      <ul>
        {items.map((tag: string[], index: number) => (
          <li key={index}>
            <Link href={`tags/${tag}`}>
              <a>{tag}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledChip>
  );
};
