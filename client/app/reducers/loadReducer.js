import { Types } from "~/shared/constants";

const initialState = false;

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_REQUEST:
    case Types.FETCH_PRODUCT_PAGE_REQUEST:
      return true;
    case Types.FETCH_PRODUCT_PAGE_SUCCESS:
    case Types.FETCH_PRODUCT_SUCCESS:
    case Types.FETCH_PRODUCT_ERROR:
      return false;
    default:
      return state;
  }
};

export default loadReducer;
