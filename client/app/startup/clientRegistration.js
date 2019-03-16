// import "@babel/polyfill";
// import "es5-shim";

import ReactOnRails from "react-on-rails";

import sharedStore from "../stores/sharedStore";

import ProductApp from "../bundles/Product/startup/ProductApp";
import EditorApp from "../bundles/Editor/startup/EditorApp"
import FavoriteApp from "../bundles/Favorite/startup/FavoriteApp";

ReactOnRails.setOptions({
  traceTurbolinks: true
});

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ProductApp,
  FavoriteApp,
  EditorApp
});

ReactOnRails.registerStore({
  sharedStore
});
