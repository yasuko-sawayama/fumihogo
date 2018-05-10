/* eslint-disable import/prefer-default-export */

import {
  PAGE_DESTROY_REQUESTED,
  PAGE_DESTROY_SUCCESS,
  PAGE_DESTORY_ERROR
} from '../constants/pageEditConstants';

export const pageDestroy = (productId, pageId) => ({
  type: PAGE_DESTROY_REQUESTED,
  payload: {
    id: productId,
    pageId
  }
});

export const pageDestroySuccess = response => ({
  type: PAGE_DESTROY_SUCCESS,
  payload: {
    pages: response.data.pages,
    message: 'ページを削除しました。',
    style: 'warning'
  }
});

export const pageDestroyError = error => console.log(error.response) || ({
  type: PAGE_DESTORY_ERROR,
  payload: {
    error,
    message: 'エラーがあります。',
    style: 'danger'
  }
});
