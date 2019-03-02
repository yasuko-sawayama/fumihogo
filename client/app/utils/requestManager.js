/* eslint-disable import/prefer-default-export */

import axios from "axios";
import ReactOnRails from "react-on-rails";

export const fetchEntity = (url, options = {}) =>
  axios({
    method: "GET",
    url,
    responseType: "json",
    headers: ReactOnRails.authenticityHeaders(),
    ...options
  });
