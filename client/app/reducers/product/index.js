import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import currentProductReducer from "./currentProductReducer";
import currentPageReducer from "./currentPageReducer";

// Why name function the same as the reducer?
// https://github.com/gaearon/redux/issues/428#issuecomment-129223274
// Naming the function will help with debugging!
const productReducer = combineReducers({
  products: productsReducer,
  currentProduct: currentProductReducer,
  currentPage: currentPageReducer
});

export default productReducer;
