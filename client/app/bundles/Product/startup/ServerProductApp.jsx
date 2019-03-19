import React from "react";
import { Provider } from "react-redux";
import ReactOnRails from "react-on-rails";

import Product from "../components/ServerProduct";

const ServerProductApp = () => {
  const store = ReactOnRails.getStore("sharedStore");

  return (
    <Provider store={store}>
      <Product />
    </Provider>
  );
};

export default ServerProductApp;
