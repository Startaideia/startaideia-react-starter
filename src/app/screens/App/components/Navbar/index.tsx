import React from "react";
import { GoSignOut } from "react-icons/go";

import { Brand, Group, Aside, Container } from "./styles";
import logo from "assets/images/logo.png";
import { useHref } from "hooks";

function Navbar() {
  const { open } = useHref();

  return (
    <Container>
      <Aside>
        <Brand src={logo} />
      </Aside>
      <Group>
        <Group.Item onClick={open("/")}>
          <GoSignOut />
        </Group.Item>
      </Group>
    </Container>
  );
}

export default Navbar;
