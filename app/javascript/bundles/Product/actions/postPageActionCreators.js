/* eslint-disable import/prefer-default-export */

import {
  PAGE_POST_REQUESTED,
  PAGE_POST_SUCCESS,
  PAGE_POST_ERROR,
  CLEAR_ERROR,
} from '../constants/productConstants';

export const postPage = (values, { id, }) => ({
  type: PAGE_POST_REQUESTED,
  payload: {
    data: values,
    productId: id,
  },
});

export const postPageSucces = page => ({
  type: PAGE_POST_SUCCESS,
  payload: {
    product: {
      page,
    },
  },
});

export const postPageError = errors => ({
  type: PAGE_POST_ERROR,
  payload: {
    errors,
  },
});

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: null,
})
