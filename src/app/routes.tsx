import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeLayout } from "layouts";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeLayout />
        </Route>
      </Switch>
    </Router>
  );
}
