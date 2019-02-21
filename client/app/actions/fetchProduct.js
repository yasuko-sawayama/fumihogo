import { put, call } from "redux-saga/effects";
import { TYPES } from "~/shared/constants";

export const fetchProductRequest = () => ({
  type: TYPES.FETCH_PRODUCT_REQUEST
});
