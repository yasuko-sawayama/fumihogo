/* eslint-disable import/prefer-default-export */

import {
  CREATE_REQUEST, CREATE_SUCCESS,
  CREATE_ERROR, CLEAR_ERROR
} from '../constants/createProductConstants';

import getProductAttributes from '../libs/getProductAttributes';

export const createProduct = data => ({
  type: CREATE_REQUEST,
  payload: {
    data: getProductAttributes(data),
  },
});

export const postProductSuccess = response => ({
  type: CREATE_SUCCESS,
  payload: {
    data: response.data,
  },
});

export const postProductError = error => ({
  type: CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: null,
});

