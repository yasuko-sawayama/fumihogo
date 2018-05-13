/* eslint-disable import/prefer-default-export */

import {
  PAGE_CONTENT_FETCH_SUCCESS,
  PAGE_CONTENT_FETCH_ERROR,
  PAGE_CONTENT_FETCH_REQUESTED
} from "../constants/productConstants";

export const fetchPageContent = (productId, id) => ({
  type: PAGE_CONTENT_FETCH_REQUESTED,
  payload: {
    productId,
    id
  }
});

export const fetchPageContentSuccess = response => ({
  type: PAGE_CONTENT_FETCH_SUCCESS,
  payload: {
    product: {
      page: { ...response.data.page }
    }
  }
});

export const fetchPageContentError = error => console.log(error) || ({
  type: PAGE_CONTENT_FETCH_ERROR,
  payload: {
    error
  }
});
