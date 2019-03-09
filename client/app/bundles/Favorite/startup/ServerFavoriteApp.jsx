import React from "react";
import { Provider } from "react-redux";
import ReactOnRails from "react-on-rails";

import Favorite from "../components/ServerFavorite";

const ServerFavoriteApp = () => {
  // This is where we get the existing store.
  const store = ReactOnRails.getStore("sharedStore");

  return (
    <Provider store={store}>
      <Favorite/>
    </Provider>
  );
};

export default ServerFavoriteApp;
