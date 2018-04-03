/* eslint-disable import/prefer-default-export */

import {
  PAGE_CONTENT_FETCH_SUCCESS,
  PAGE_CONTENT_FETCH_REQUESTED
} from '../constants/productConstants';

export const fetchPageContent = (id, pageId) => ({
  type: PAGE_CONTENT_FETCH_REQUESTED,
  payload: {
    productId: id,
    pageId,
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
