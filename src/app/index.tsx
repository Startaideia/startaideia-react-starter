import React from "react";
import { Provider } from "react-redux";
import store from "store/index";
import Routes from "./routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
