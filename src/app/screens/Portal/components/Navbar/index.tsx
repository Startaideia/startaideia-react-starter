import React from "react";

import { Container, Nav } from "./styles";
import { useNavigate } from "hooks";

function Navbar() {
  const { navigate } = useNavigate();

  return (
    <Container>
      <Nav>
        <Nav.Item onClick={navigate("/auth/login")}>Entrar</Nav.Item>
        <Nav.Item onClick={navigate("/auth/register")}>Cadastrar</Nav.Item>
      </Nav>
    </Container>
  );
}

export default Navbar;
