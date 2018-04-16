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

export const postEntities = (url, data, options = {}) => (
  axios({
    method: 'POST',
    url,
    data,
    headers: ReactOnRails.authenticityHeaders(),
    ...options,
  })
);

export const updateEntities = (url, data, options = {}) => (
  axios({
    method: 'PATCH',
    url,
    data,
    headers: ReactOnRails.authenticityHeaders(),
    ...options,
  })
);
