import React from "react";

import underConstruction from "assets/images/under_construction.png";
import { Container, Image, Title } from "./styles";

function Empty() {
  return (
    <Container>
      <Image src={underConstruction} />
      <Title.H1>Em construção</Title.H1>
      <Title.H2 className="mt-2">
        Em breve uma nova funcionalidade por aqui
      </Title.H2>
    </Container>
  );
}

export default Empty;
