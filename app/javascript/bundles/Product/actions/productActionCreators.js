/* eslint-disable import/prefer-default-export */

import {
  PAGE_CONTENT_FETCH_SUCCESS,
  PAGE_CONTENT_FETCH_REQUESTED,
} from '../constants/productConstants';

export const fetchPageContent = ({ id, pageId }) => ({
  type: PAGE_CONTENT_FETCH_SUCCESS,
  payload: {
    contentId: id,
    pageId,
  },
});
