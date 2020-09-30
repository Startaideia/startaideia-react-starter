import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Portal, Auth, App } from "../screens";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Auth.Routes} />
        <Route path="/app" component={App.Routes} />
        <Route path="/" component={Portal.Routes} />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default Routes;
