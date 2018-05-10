/* eslint-disable import/prefer-default-export */

import { SHOW_MESSAGE, DISMISS_MESSAGE } from '../constants/alertConstants';

export const showMessage = (style, _message) => ({
  type: SHOW_MESSAGE
});

export const dismissMessage = () => ({
  type: DISMISS_MESSAGE,
  payload: null
});
