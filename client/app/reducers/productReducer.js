import { Types } from "~/shared/constants";

const initialState = {
  products: [],
  currentProduct: null
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
    default:
      return state;
  }
  return state;
};

export default productReducer;
