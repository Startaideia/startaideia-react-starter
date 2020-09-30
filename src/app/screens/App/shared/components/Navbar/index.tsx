import React from "react";
import { GoSignOut } from "react-icons/go";

import { Brand, Group, Aside, Container } from "./styles";
import logo from "assets/images/logo.png";
import { useNavigate } from "app/shared";

function Navbar() {
  const { navigate } = useNavigate();

  return (
    <Container>
      <Aside>
        <Brand src={logo} />
      </Aside>
      <Group>
        <Group.Item onClick={navigate("/")}>
          <GoSignOut />
        </Group.Item>
      </Group>
    </Container>
  );
}

export default Navbar;
