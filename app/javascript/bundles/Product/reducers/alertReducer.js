import { SHOW_MESSAGE, DISMISS_MESSAGE } from '../constants/alertConstants';

import {
  PAGE_POST_REQUESTED, PAGE_POST_SUCCESS, PAGE_POST_ERROR,
  PRODUCT_UPDATE_REQUESTED, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_ERROR,
} from '../constants/productConstants';

import {
  PAGE_UPDATE_REQUESTED, PAGE_UPDATE_SUCCESS, PAGE_UPDATE_ERROR,
  PAGE_DESTROY_REQUESTED, PAGE_DESTROY_SUCCESS, PAGE_DESTORY_ERROR
} from '../constants/pageEditConstants';

const alertReducer = (state=null, action) => {
  switch (action.type) {
  case SHOW_MESSAGE:
    return {
      show: true,
      ...state,
    };
  case PRODUCT_UPDATE_SUCCESS:
  case PAGE_POST_SUCCESS:
  case PAGE_UPDATE_SUCCESS:
  case PAGE_DESTROY_SUCCESS:
    return {
      show: true,
      message: action.payload.message,
      style: action.payload.style || 'success',
    }
  case PRODUCT_UPDATE_ERROR:
  case PAGE_POST_ERROR:
  case PAGE_UPDATE_ERROR:
  case PAGE_DESTORY_ERROR:
    if (action.payload.error && action.payload.error.response.status !== 500) {
      return {
        show: true,
        error: action.payload.error,
        message: action.payload.message,
        style: action.payload.style || 'danger',
      };
    }

    return {
      show: true,
      message: '不明なエラーが発生しました。',
      style: 'danger',
    };

  case DISMISS_MESSAGE:
  case PRODUCT_UPDATE_REQUESTED:
  case PAGE_POST_REQUESTED:
  case PAGE_UPDATE_REQUESTED:
  case PAGE_DESTROY_REQUESTED:
    return {
      show: false,
    };
  default:
    return state;
  }
};

export default alertReducer;
