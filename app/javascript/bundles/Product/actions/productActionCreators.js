import { PAGE_CONTENT_FETCH_SUCCESS } from '../constants/productConstants';

export const fetchPageContent = ({ id, pageId }) => ({
  type: PAGE_CONTENT_FETCH_SUCCESS,
  payload: {
    contentId: id,
    pageId,
  },
});
