import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles.style";
import { Navbar } from "./components/Navbar";

export const App2 = () => {
  return (
    <Container>
      <GlobalStyles />
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`;
