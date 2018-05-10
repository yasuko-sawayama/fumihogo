import {
  PAGE_CONTENT_FETCH_SUCCESS,
  PAGE_CONTENT_FETCH_ERROR
} from '../../constants/productConstants';

const defaultState = {
  pageTitle: '',
  impressionCount: 0,
  nextPage: null,
  previousPage: null,
};

const pageInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
  case PAGE_CONTENT_FETCH_SUCCESS:
    return {
      ...action.payload.product.page,
    };

  case PAGE_CONTENT_FETCH_ERROR:
    return {
      pageTitle: '',
    };

  default:
    return state;
  }
};

export default pageInfoReducer;
