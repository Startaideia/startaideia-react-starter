import React from "react";

import { Container, Main, Body } from "./styles";
import { ModalProvider } from "app/shared";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <Container>
      <ModalProvider>
        <Navbar />
        <Body>
          <Main>{children}</Main>
        </Body>
      </ModalProvider>
    </Container>
  );
}

export default Layout;
