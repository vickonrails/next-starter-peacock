import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

export type IWidth = 'default' | 'bleed' | 'narrow';
export interface IContainer extends HTMLAttributes<HTMLElement> {
  width?: IWidth;
}

const getMaxWidth = (width: IWidth) => {
  switch (width) {
    case 'bleed':
      return 'max-w-[90%]'

    case 'default':
    default:
      return 'max-w-7xl'

    case 'narrow':
      return 'max-w-4xl'
  }
}

const Container: FC<IContainer> = ({
  children,
  width = 'default',
  className,
  ...rest
}) => {
  const maxWidth = getMaxWidth(width)

  return (
    <section
      className={
        clsx(
          'my-0 mx-auto py-0 px-[4%]',
          className,
          maxWidth
        )}
      {...rest}
    >
      {children}
    </section>
  );
};

export { Container };
