// import "@babel/polyfill";
// import "es5-shim";

// Shows the mapping from the exported object to the name used by the server rendering.
import ReactOnRails from "react-on-rails";
import sharedStore from "../stores/sharedStore";

import ProductApp from "../bundles/Product/startup/ServerProductApp";
import FavoriteApp from "../bundles/Favorite/startup/ServerFavoriteApp";

ReactOnRails.register({
  ProductApp,
  FavoriteApp
});

ReactOnRails.registerStore({
  sharedStore
});
