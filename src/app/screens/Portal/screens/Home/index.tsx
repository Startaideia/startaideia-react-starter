import React from "react";

import { Container, Brand } from "./styles";
import logo from "assets/images/logo.gif";

function Home() {
  return (
    <Container>
      <Brand src={logo} />
      <div>Startaideia React Starter</div>
    </Container>
  );
}

export default Home;
