import React from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import store from "store";

function Main() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default Main;
