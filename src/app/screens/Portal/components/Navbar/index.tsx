import React from "react";

import { Container, Nav } from "./styles";
import { useHref } from "hooks";

function Navbar() {
  const { open } = useHref();

  return (
    <Container>
      <Nav>
        <Nav.Item onClick={open("/auth/login")}>Entrar</Nav.Item>
        <Nav.Item onClick={open("/auth/register")}>Cadastrar</Nav.Item>
      </Nav>
    </Container>
  );
}

export default Navbar;
