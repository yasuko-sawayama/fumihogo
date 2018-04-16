/* eslint-disable import/prefer-default-export */

import { SHOW_MESSAGE, DISMISS_MESSAGE } from '../constants/alertConstants';

export const showMessage = (style, message) => ({
  type: SHOW_MESSAGE,
  payload: {
    style,
    message,
  }
});

export const dismissMessage = () => ({
  type: DISMISS_MESSAGE,
  payload: null,
});
