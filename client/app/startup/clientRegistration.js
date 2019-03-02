import "@babel/polyfill";
import "es5-shim";

import ReactOnRails from "react-on-rails";

import sharedStore from "../stores/sharedStore";

import ProductApp from "../bundles/Product/startup/ProductApp";

ReactOnRails.setOptions({
  traceTurbolinks: true
});

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ProductApp
});

ReactOnRails.registerStore({
  sharedStore
});
