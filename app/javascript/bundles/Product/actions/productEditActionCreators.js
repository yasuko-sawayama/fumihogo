/* eslint-disable import/prefer-default-export */

import {
  PRODUCT_UPDATE_REQUESTED,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_ERROR
} from '../constants/productConstants';


export const updateProduct = (data, { id }) => ({
  type: PRODUCT_UPDATE_REQUESTED,
  payload: {
    data,
    id
  }
});

export const updateProductSuccess = response => ({
  type: PRODUCT_UPDATE_SUCCESS,
  payload: {
    product: response.data.product,
    message: '作品情報を更新しました。',
    style: 'success'
  }
});

export const updateProductError = error => console.log(error) || ({
  type: PRODUCT_UPDATE_ERROR,
  payload: {
    error,
    message: '作品情報の更新に失敗しました。',
    style: 'danger'
  }
});
