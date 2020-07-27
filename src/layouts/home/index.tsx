import React from "react";
import { Switch, Route } from "react-router";
import { HomePage } from "pages/index";

export default function HomeLayout() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
}
