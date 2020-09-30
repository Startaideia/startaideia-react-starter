import React from "react";
import { Container, Image } from "./styles";
import underConstruction from "assets/images/under_construction.png";
import Text from "../Text";

function Empty() {
  return (
    <Container>
      <Image src={underConstruction} />
      <Text size={40} value="Em construção" />
      <Text
        size={18}
        className="mt-2"
        value="Em breve uma nova funcionalidade por aqui"
      />
    </Container>
  );
}

export default Empty;
