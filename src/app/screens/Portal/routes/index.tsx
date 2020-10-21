import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { Navbar } from "../components";
import { Home } from "../screens";

function Routes() {
  const { path } = useRouteMatch();

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path={path} component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
