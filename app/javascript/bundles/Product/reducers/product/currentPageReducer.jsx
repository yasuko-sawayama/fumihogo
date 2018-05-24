import { PAGE_CHANGED } from "../../constants/productConstants";

const currentPageReducer = (state = 1, action) => {
  switch (action.type) {
    case PAGE_CHANGED:
      return action.payload.pageId || state;
    default:
      return state;
  }
};

export default currentPageReducer;
