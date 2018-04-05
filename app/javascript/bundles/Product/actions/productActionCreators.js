/* eslint-disable import/prefer-default-export */
import {
  PAGE_CHANGED
} from '../constants/productConstants';

export * from './fetchPageContentActionCreators';
export * from './fetchProductActionCreators';

export const changePage = pageId => ({
  type: PAGE_CHANGED,
  payload: {
    pageId,
  },
});


