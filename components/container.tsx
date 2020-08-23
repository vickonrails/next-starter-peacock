import React, { HTMLAttributes } from "react";
import { StyledContainer } from "./styles/container.styles";

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
