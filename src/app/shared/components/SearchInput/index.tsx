import React from "react";

import { Container, Input, Icon } from "./styles";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <Container>
      <Icon>
        <BsSearch />
      </Icon>
      <Input placeholder="Pesquisar" />
    </Container>
  );
}

export default SearchInput;
