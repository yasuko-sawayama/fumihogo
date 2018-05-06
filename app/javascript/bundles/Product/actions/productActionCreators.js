/* eslint-disable import/prefer-default-export */
import { PAGE_CHANGED } from '../constants/productConstants';

export * from './fetchPageContentActionCreators';
export * from './fetchProductActionCreators';
export * from './postPageActionCreators';
export * from './alertActionCreators';

export const changePage = (pageId = 1) => ({
  type: PAGE_CHANGED,
  payload: {
    pageId,
  },
});

