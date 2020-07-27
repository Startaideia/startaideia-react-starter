import React from "react";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";

import { HomePage } from "pages";
import { Navbar } from "components";

function HomeLayout({ title }: any) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps({ app }: any) {
  return {
    ...app,
  };
}

export default connect(mapStateToProps)(HomeLayout);
