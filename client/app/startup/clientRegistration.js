// import "@babel/polyfill";
// import "es5-shim";

import ReactOnRails from "react-on-rails";

import sharedStore from "../stores/sharedStore";

import ProductApp from "../bundles/Product/startup/ProductApp";
import FavoriteApp from "../bundles/Favorite/startup/FavoriteApp";

ReactOnRails.setOptions({
  traceTurbolinks: true
});

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ProductApp,
  FavoriteApp
});

ReactOnRails.registerStore({
  sharedStore
});
