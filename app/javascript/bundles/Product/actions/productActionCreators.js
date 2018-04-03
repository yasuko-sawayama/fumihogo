/* eslint-disable import/prefer-default-export */

import {
  PAGE_CONTENT_FETCH_SUCCESS,
  PAGE_CONTENT_FETCH_ERROR,
  PAGE_CONTENT_FETCH_REQUESTED,
  PAGE_CHANGED
} from '../constants/productConstants';

export const fetchPageContent = url => ({
  type: PAGE_CONTENT_FETCH_REQUESTED,
  payload: {
    url,
  },
});

export const fetchPageContentSuccess = response => ({
  type: PAGE_CONTENT_FETCH_SUCCESS,
  payload: {
    product: {
      page: {
        content: response.data.page.content,
      },
    },
  },
});

export const fetchPageContentError = error => console.log(error) || ({
  type: PAGE_CONTENT_FETCH_ERROR,
  payload: {
    error,
  },
});

export const changePage = pageId => ({
  type: PAGE_CHANGED,
  payload: {
    pageId,
  },
});
