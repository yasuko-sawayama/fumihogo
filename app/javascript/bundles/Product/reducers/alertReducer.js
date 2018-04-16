import { SHOW_MESSAGE, DISMISS_MESSAGE } from '../constants/alertConstants';
import { PAGE_POST_SUCCESS, PAGE_POST_ERROR } from '../constants/productConstants';

const alertReducer = (state=null, action) => {
  switch (action.type) {
  case SHOW_MESSAGE:
  case PAGE_POST_SUCCESS:
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
