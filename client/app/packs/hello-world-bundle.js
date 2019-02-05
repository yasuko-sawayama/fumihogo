import ReactOnRails from "react-on-rails";

import HelloWorldApp from "../bundles/HelloWorld/startup/HelloWorldApp";

// TODO: react-loadable-visibility
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp
});
