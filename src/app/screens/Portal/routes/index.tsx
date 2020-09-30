import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { Layout } from "../shared";
import { Home } from "../screens";

function Routes() {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route path={path} component={Home} />
      </Switch>
    </Layout>
  );
}

export default Routes;
