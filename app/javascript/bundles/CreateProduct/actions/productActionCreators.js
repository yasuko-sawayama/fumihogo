/* eslint-disable import/prefer-default-export */

import { CREATE_REQUEST, CREATE_SUCCESS,
         CREATE_ERROR, CLEAR_ERROR } from '../constants/createProductConstants';

export const createProduct = data => ({
  type: CREATE_REQUEST,
  payload: {
    data,
  },
});

export const postProductSuccess = response => ({
  type: CREATE_SUCCESS,
  payload: {
    product: response.data.product,
  },
});

export const postProductError = error => console.log(error) || ({
  type: CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: null,
})
  

