import railsContextReducer from "./railsContextReducer";
import currentUserReducer from "./currentUserReducer";
import productReducer from "./productReducer";
import loadReducer from "./loadReducer";

// This is how you do a directory of reducers.
// The `import * as reducers` does not work for a directory, but only with a single file
export default {
  railsContext: railsContextReducer,
  currentUserData: currentUserReducer,
  productData: productReducer,
  loading: loadReducer
};
