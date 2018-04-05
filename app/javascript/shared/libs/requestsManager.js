/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import ReactOnRails from 'react-on-rails';

//const API_ENTRY_URL = '/api/v1/';

export const fetchEntities = (url, options = {}) => (
  axios({
    method: 'GET',
    url,
    responseType: 'json',
    headers: ReactOnRails.authenticityHeaders(),
    ...options,
  })
);
