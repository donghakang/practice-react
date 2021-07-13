import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  outline: none;
  border: none;
  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
    `}
`;

const PrimaryButton = styled(StyledButton)`
  background-color: palevioletred;
  color: white;
`;

const Button = ({ primary, children }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;
