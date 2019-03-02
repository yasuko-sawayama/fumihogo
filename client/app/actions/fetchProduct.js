import { put, call } from "redux-saga/effects";
import { Types } from "~/shared/constants";

export const fetchProductRequest = product_id => ({
  type: Types.FETCH_PRODUCT_REQUEST,
  payload: {
    product_id
  }
});
