import { SHOW_MESSAGE, DISMISS_MESSAGE } from '../constants/alertConstants';
import { PAGE_POST_REQUESTED, PAGE_POST_SUCCESS, PAGE_POST_ERROR } from '../constants/productConstants';
import { PAGE_UPDATE_REQUESTED, PAGE_UPDATE_SUCCESS, PAGE_UPDATE_ERROR } from '../constants/pageEditConstants';

const alertReducer = (state=null, action) => {
  switch (action.type) {
  case SHOW_MESSAGE:
    return {
      show: true,
      ...state,
    };
  case PAGE_POST_SUCCESS:
  case PAGE_UPDATE_SUCCESS:
  case PAGE_POST_ERROR:
  case PAGE_UPDATE_ERROR:
    return {
      show: true,
      message: action.payload.message,
      style: action.payload.style,
    };
  case DISMISS_MESSAGE:
  case PAGE_POST_REQUESTED:
  case PAGE_UPDATE_REQUESTED:
    return {
      show: false,
    };
  default:
    return state;
  }
};

export default alertReducer;
