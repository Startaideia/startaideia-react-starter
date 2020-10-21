import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { ResetPassword, ForgotPassword, Login, Register } from "../screens";
import { Container } from "./styles";

function Routes() {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Switch>
        <Route
          path={`${path}/forgot-password`}
          component={ForgotPassword}
          exact
        />
        <Route
          path={`${path}/reset-password`}
          component={ResetPassword}
          exact
        />
        <Route path={`${path}/register`} component={Register} exact />
        <Route path={`${path}/login`} component={Login} exact />
      </Switch>
    </Container>
  );
}

export default Routes;
