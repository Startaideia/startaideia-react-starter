import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { Container, Main, Body } from "./styles";
import { Navbar } from "../components";
import { Home } from "../screens";

function Routes() {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Navbar />
      <Body>
        <Switch>
          <Route path={`${path}`} component={Home} />
        </Switch>
      </Body>
    </Container>
  );
}

export default Routes;
