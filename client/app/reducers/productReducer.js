import { Types } from "~/shared/constants";
import { combineReducers } from "redux";

const productsReducer = (state=[]) => state;
const currentProductReducer = (state=null, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.FETCH_PRODUCT_SUCCESS: {
      return payload.product
    }

    default:
      return state;
  }
}

const currentPageReducer = (state = null, action ) => {
  const { type, payload } = action;

  switch (type) {
    case Types.FETCH_PRODUCT_PAGE_SUCCESS: {
      return payload.page;
    }
    default:
      return state
  }
}

// Why name function the same as the reducer?
// https://github.com/gaearon/redux/issues/428#issuecomment-129223274
// Naming the function will help with debugging!
const productReducer = combineReducers({
  products: productsReducer,
  currentProduct: currentProductReducer,
  currentPage: currentPageReducer
})

export default productReducer;
