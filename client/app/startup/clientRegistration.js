import "@babel/polyfill";
import "es5-shim";

import ReactOnRails from "react-on-rails";

import sharedStore from "../stores/sharedStore";

import HelloWorldApp from "../bundles/HelloWorld/startup/HelloWorldApp";

ReactOnRails.setOptions({
  traceTurbolinks: true
});

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp
});

ReactOnRails.registerStore({
  sharedStore
});
