import React from "react";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import store from "store";
import Routes from "./routes";

export default function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </HelmetProvider>
  );
}
