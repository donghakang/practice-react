import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #888888;
`;

function Description({ children }) {
  return <Container>{children}</Container>;
}

export default Description;
