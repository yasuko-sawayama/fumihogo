import {
  PAGE_CONTENT_FETCH_SUCCESS,
  PAGE_CONTENT_FETCH_ERROR,
} from '../../constants/productConstants';

const contentReducer = (state = '', action) => {
  switch (action.type) {
    case PAGE_CONTENT_FETCH_SUCCESS:
      return action.payload.product.page.content;
    case PAGE_CONTENT_FETCH_ERROR:
      return 'ページがありません';
    default:
      return state;
  }
};

export default contentReducer;
