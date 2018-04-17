/* eslint-disable import/prefer-default-export */

import { UPDATE_PAGE_REQUEST } from '../constants/pageEditConstants';

export const updatePage = (data, id, pageId) => ({
  type: UPDATE_PAGE_REQUEST,
  payload: {
    data,
    id,
    pageId,
  },
});

