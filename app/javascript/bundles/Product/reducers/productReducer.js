import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

import aboutReducer from './product/aboutReducer';
import authorReducer from './product/authorReducer';
import contentReducer from './product/contentReducer';
import pagesReducer from './product/pagesReducer';
import currentPageReducer from './product/currentPageReducer';
import pageInfoReducer from './product/pageInfoReducer';

const id = (state='', action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const title = (state = '', action) => {
  switch (action.type) {
  case HELLO_WORLD_NAME_UPDATE:
    return action.text;
  default:
    return state;
  }
};

const description = (state={}, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const ProductReducer = combineReducers({
  id,
  title,
  description,
  author: authorReducer,
  about: aboutReducer,
  content: contentReducer,
  currentPage: currentPageReducer,
  pages: pagesReducer,
  pageInfo: pageInfoReducer,
});

export default ProductReducer;
