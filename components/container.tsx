import React, { FC, HTMLAttributes } from "react";
import { StyledContainer } from "./styles/container.styles";
import { IWidth } from "../util/getWidth";

export interface IContainer extends HTMLAttributes<HTMLElement> {
  width?: IWidth;
}

const Container: FC<IContainer> = ({
  children,
  width = "default",
  ...props
}) => {
  return (
    <StyledContainer width={width} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;
