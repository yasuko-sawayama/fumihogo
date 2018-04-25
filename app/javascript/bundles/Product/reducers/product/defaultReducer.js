import { combineReducers } from 'redux';

import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR
} from '../../constants/productConstants';

export const id = (state = '', action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
    return action.payload.product.id;

  case PRODUCT_FETCH_ERROR:
    return state;

  default:
    return state;
  }
};

export const title = (state = '', action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
    return action.payload.product.title;
  case PRODUCT_FETCH_ERROR:
    return '';
  default:
    return state;
  }
};

export const description = (state = {}, action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
    return action.payload.product.description;
  case PRODUCT_FETCH_ERROR:
    return 'error';
  default:
    return state;
  }
};

export const cover_image_url = (state = null, action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
    return action.payload.product.cover_image_url;
  case PRODUCT_FETCH_ERROR:
    return null;
  default:
    return state;
  }
};
