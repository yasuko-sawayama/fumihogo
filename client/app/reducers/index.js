import railsContextReducer from "./railsContextReducer";
import currentUserReducer from "./currentUserReducer";
import productReducer from "./product";
import loadReducer from "./loadReducer";
import pageInfoReducer from "./pageInfoReducer";

// This is how you do a directory of reducers.
// The `import * as reducers` does not work for a directory, but only with a single file
export default {
  railsContext: railsContextReducer,
  currentUserData: currentUserReducer,
  productData: productReducer,
  pageInfo: pageInfoReducer,
  loading: loadReducer
};
6;
