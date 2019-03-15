import { Types } from "~/shared/constants";

const currentPageReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.FETCH_PRODUCT_PAGE_SUCCESS: {
      return payload.page;
    }
    default:
      return state;
  }
};

export default currentPageReducer;
