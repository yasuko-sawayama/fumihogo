/* eslint-disable import/prefer-default-export */

import {
  PAGE_POST_REQUESTED,
  PAGE_POST_SUCCESS,
  PAGE_POST_ERROR,
  CLEAR_ERROR
} from "../constants/productConstants";

export const postPage = (values, { id }) => ({
  type: PAGE_POST_REQUESTED,
  payload: {
    data: {
      title: values.pageTitle,
      content: values.content
    },
    productId: id
  }
});

export const postPageSuccess = response => ({
  type: PAGE_POST_SUCCESS,
  payload: {
    message: "ページを追加しました。",
    style: "success"
  }
});

export const postPageError = error => console.log(error) || ({
  type: PAGE_POST_ERROR,
  payload: {
    error,
    message: "ページの新規作成に失敗しました。",
    style: "danger"
  }
});

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: null
});
