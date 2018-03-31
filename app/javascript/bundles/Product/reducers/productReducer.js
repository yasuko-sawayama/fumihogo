import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

import aboutReducer from './product/aboutReducer';
import authorReducer from './product/authorReducer';

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
  title,
  description,
  author: authorReducer,
  about: aboutReducer,
});

export default ProductReducer;
