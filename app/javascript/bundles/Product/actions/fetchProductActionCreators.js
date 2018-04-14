/* eslint-disable import/prefer-default-export */
import {
  PRODUCT_FETCH_REQUESTED,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR
} from '../constants/productConstants';

export const fetchProduct = id => ({
  type: PRODUCT_FETCH_REQUESTED,
  payload: {
    productId: id,
  },
});

export const fetchProductSuccess = response => ({
  type: PRODUCT_FETCH_SUCCESS,
  payload: {
    product: response.data.product,
  },
});

export const fetchProductError = error => console.log(error) || ({
  type: PRODUCT_FETCH_ERROR,
  payload: {
    error,
  },
});
