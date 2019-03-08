import { Types } from "~/shared/constants";

const initialState = {
  products: [],
  currentProduct: {},
  currentPage: {},
  pageLoading: false
};

// Why name function the same as the reducer?
// https://github.com/gaearon/redux/issues/428#issuecomment-129223274
// Naming the function will help with debugging!
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.FETCH_PRODUCT_PAGE_SUCCESS: {
      return {
        ...state,
        currentPage: payload.page
      };
    }
    case Types.FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        currentUser: payload.currentUser,
        currentProduct: payload.product
      };
    }
    default:
      return state;
  }
  return state;
};

export default productReducer;
