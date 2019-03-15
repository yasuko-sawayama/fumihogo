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

export const postEntities = (url, data, options = {}) =>
  axios({
    method: "POST",
    url,
    data,
    headers: ReactOnRails.authenticityHeaders(),
    ...options
  });

export const updateEntities = (url, data, options = {}) =>
  axios({
    method: "PATCH",
    url,
    data,
    headers: ReactOnRails.authenticityHeaders(),
    ...options
  });

export const deleteEntity = (url, options = {}) =>
  axios({
    method: "DELETE",
    url,
    headers: ReactOnRails.authenticityHeaders(),
    ...options
  });
