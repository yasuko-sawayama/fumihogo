import { combineReducers } from 'redux';

import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR,
  PRODUCT_UPDATE_SUCCESS
} from '../constants/productConstants';

import infoReducer from './product/infoReducer';
import authReducer from './product/authReducer';
import aboutReducer from './product/aboutReducer';
import authorReducer from './product/authorReducer';
import contentReducer from './product/contentReducer';
import pagesReducer from './product/pagesReducer';
import currentPageReducer from './product/currentPageReducer';
import pageInfoReducer from './product/pageInfoReducer';

const id = (state = '', action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
    return action.payload.product.id;

  case PRODUCT_FETCH_ERROR:
    return state;

  default:
    return state;
  }
};

const title = (state = '', action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
  case PRODUCT_UPDATE_SUCCESS:
    return action.payload.product.title;
  case PRODUCT_FETCH_ERROR:
    return '';
  default:
    return state;
  }
};

const description = (state = {}, action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
  case PRODUCT_UPDATE_SUCCESS:
    return action.payload.product.description;
  case PRODUCT_FETCH_ERROR:
    return 'error';
  default:
    return state;
  }
};

const ProductReducer = combineReducers({
  id,
  title,
  description,
  info: infoReducer,
  auth: authReducer,
  author: authorReducer,
  about: aboutReducer,
  content: contentReducer,
  currentPage: currentPageReducer,
  pages: pagesReducer,
  pageInfo: pageInfoReducer,
});

export default ProductReducer;
