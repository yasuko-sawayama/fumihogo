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
    data: {
      title: values.pageTitle,
      content: values.content,
    },
    productId: id,
  },
});

export const postPageSuccess = response => console.log(response) || ({
  type: PAGE_POST_SUCCESS,
  payload: {
    message: 'ページを追加しました。',
    style: 'success',
  },
});

export const postPageError = errors => console.log(errors) || ({
  type: PAGE_POST_ERROR,
  payload: {
    errors,
  },
});

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: null,
})
