import Link from 'next/link';
import { StyledChip } from '../styles/chips.styles';

type Props = {
  items: string[];
};

export const Chips = ({ items }: Props) => {
  return (
    <StyledChip>
      <ul>
        {items.map((tag: string) => (
          <li key={tag}>
            <Link href={`tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </StyledChip>
  );
};
