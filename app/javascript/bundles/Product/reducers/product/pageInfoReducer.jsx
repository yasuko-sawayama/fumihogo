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
  console.log(action.type)
  console.log(action.payload)
  switch (action.type) {
  case PAGE_CONTENT_FETCH_SUCCESS:
    return {
      pageTitle: action.payload.product.page.pageTitle || '',
      nextPage: action.payload.product.page.nextPage ? {
        id: action.payload.product.page.nextPage.id,
      } :  null,
      previousPage: action.payload.product.page.previousPage ? {
        id: action.payload.product.page.previousPage.id,
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
