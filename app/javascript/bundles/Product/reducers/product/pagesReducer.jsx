import {
  PRODUCT_FETCH_ERROR,
  PRODUCT_FETCH_SUCCESS
} from '../../constants/productConstants';

const pagesReducer = (state = [], action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
    return action.payload.product.pages;
  case PRODUCT_FETCH_ERROR:
    return [];
  default:
    return state;
  }
};

export default pagesReducer;
