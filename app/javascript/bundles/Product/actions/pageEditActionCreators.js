/* eslint-disable import/prefer-default-export */

import {
  PAGE_UPDATE_REQUESTED,
  PAGE_UPDATE_SUCCESS,
  PAGE_UPDATE_ERROR
} from '../constants/pageEditConstants';

export const updatePage = (data, id, pageId) => ({
  type: PAGE_UPDATE_REQUESTED,
  payload: {
    data,
    id,
    pageId
  }
});

export const updatePageSuccess = response => ({
  type: PAGE_UPDATE_SUCCESS,
  payload: {
    message: 'ページを更新しました。',
    style: 'success'
  }
});

export const updatePageError = error => console.log(error) || ({
  type: PAGE_UPDATE_ERROR,
  payload: {
    error,
    message: 'ページの更新に失敗しました。',
    style: 'danger'
  }
});

