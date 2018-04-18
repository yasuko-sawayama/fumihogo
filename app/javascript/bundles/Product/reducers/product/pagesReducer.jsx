import {
  PRODUCT_FETCH_ERROR,
  PRODUCT_FETCH_SUCCESS
} from '../../constants/productConstants';
import {
  PAGE_DESTROY_SUCCESS,
} from '../../constants/pageEditConstants';

const pagesReducer = (state = [], action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
  case PAGE_DESTROY_SUCCESS:
    return action.payload.pages;
  case PRODUCT_FETCH_ERROR:
    return [];
  default:
    return state;
  }
};

export default pagesReducer;
