import React from "react";

import { Container, Brand } from "./styles";
import logo from "assets/images/logo.gif";
import { Text } from "app/shared";

function Home() {
  return (
    <Container>
      <Brand src={logo} />
      <Text value="Startaideia React Starter" size={60} color="--gray-600" />
    </Container>
  );
}

export default Home;
