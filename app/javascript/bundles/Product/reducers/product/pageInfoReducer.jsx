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

const pageInfoReducer = (state=defaultState, action) => {
  switch (action.type) {
  case PAGE_CONTENT_FETCH_SUCCESS:
    return {
      pageTitle: action.payload.product.page.title || '',
      impressionCount: action.payload.product.page.impressionCount,
      nextPage: action.payload.product.page.nextPage ? {
        id: action.payload.product.page.nextPage.position,
        title: action.payload.product.page.nextPage.title,
      } :  null,
      previousPage: action.payload.product.page.previousPage ? {
        id: action.payload.product.page.previousPage.position,
        title: action.payload.product.page.previousPage.title,
      } : null,
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
