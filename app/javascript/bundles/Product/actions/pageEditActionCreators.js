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
    pageId,
  },
});

export const updatePageSuccess = response => ({
  type: PAGE_UPDATE_SUCCESS,
  payload: {
    message: 'ページを更新しました。',
    style: 'success',
  },
});

export const updatePageError = errors => console.log(errors) || ({
  type: PAGE_UPDATE_ERROR,
  payload: {
    message: 'ページの更新に失敗しました。',
    style: 'danger',
  },
});

