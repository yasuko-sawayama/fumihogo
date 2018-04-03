import { PAGE_CONTENT_FETCH_SUCCESS } from '../../constants/productConstants';

const contentReducer = (state = '', action) => {
  switch (action.type) {
  case PAGE_CONTENT_FETCH_SUCCESS:
    return action.payload.product.page.content;
  default:
    return state;
  }
};

export default contentReducer;
