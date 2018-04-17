import { SHOW_MESSAGE, DISMISS_MESSAGE } from '../constants/alertConstants';
import { PAGE_POST_SUCCESS, PAGE_POST_ERROR } from '../constants/productConstants';
import { PAGE_UPDATE_SUCCESS } from '../constants/pageEditConstants';

const alertReducer = (state=null, action) => {
  switch (action.type) {
  case SHOW_MESSAGE:
  case PAGE_POST_SUCCESS:
  case PAGE_UPDATE_SUCCESS:
    return {
      message: action.payload.message,
      style: action.payload.style,
    };
  case DISMISS_MESSAGE:
    return null;
  default:
    return state;
  }
};

export default alertReducer;
