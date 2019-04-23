import { reducer as formReducer } from "redux-form";

import railsContextReducer from "./railsContextReducer";
import currentUserReducer from "./currentUserReducer";
import productReducer from "./product";
import loadReducer from "./loadReducer";
import pageInfoReducer from "./pageInfoReducer";
import messageReducer from "./messageReducer";

// This is how you do a directory of reducers.
// The `import * as reducers` does not work for a directory, but only with a single file
export default {
  railsContext: railsContextReducer,
  currentUserData: currentUserReducer,
  productData: productReducer,
  pageInfo: pageInfoReducer,
  loading: loadReducer,
  message: messageReducer,
  form: formReducer
};
