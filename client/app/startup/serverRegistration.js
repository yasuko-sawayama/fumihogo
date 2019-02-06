import "@babel/polyfill";
import "es5-shim";

// Shows the mapping from the exported object to the name used by the server rendering.
import ReactOnRails from "react-on-rails";

// import SharedReduxStore from '../stores/SharedReduxStore';
import HelloWorldApp from "../bundles/HelloWorld/startup/HelloWorldApp";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp
});

// ReactOnRails.registerStore({
// //     SharedReduxStore,
// // });
