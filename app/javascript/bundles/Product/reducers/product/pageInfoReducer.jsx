import {
  PAGE_CONTENT_FETCH_SUCCESS,
  PAGE_CONTENT_FETCH_ERROR
} from '../../constants/productConstants';

const defaultState = {
  pageTitle: '',
  nextPage: null,
  previousPage: null,
};

const pageInfoReducer = (state=defaultState, action) => {
  switch (action.type) {
  case PAGE_CONTENT_FETCH_SUCCESS:
    return {
      pageTitle: action.payload.product.page.pageTitle || '',
      nextPage: action.payload.product.page.nextPage ? {
        id: action.payload.product.page.nextPage.id,
        title: action.payload.product.page.nextPage.title,
      } :  null,
      previousPage: action.payload.product.page.previousPage ? {
        id: action.payload.product.page.previousPage.id,
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
