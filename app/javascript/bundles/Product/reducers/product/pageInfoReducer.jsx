import {
  PAGE_CONTENT_FETCH_SUCCESS,
  PAGE_CONTENT_FETCH_ERROR
} from '../../constants/productConstants';

const defaultState = {
  pageTitle: '',
};

const pageInfoReducer = (state=defaultState, action) => {
  switch (action.type) {
  case PAGE_CONTENT_FETCH_SUCCESS:
    return {
      pageTitle: action.payload.product.page.pageTitle || '',
    };

  case PAGE_CONTENT_FETCH_ERROR:
    return {
      pageTitle: ''
    };

  default:
    return state;
  }
};

export default pageInfoReducer;
