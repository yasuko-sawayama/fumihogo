import { put, call } from "redux-saga/effects";
import { Types } from "~/shared/constants";

export const fetchProductRequest = (product_id, page) => ({
  type: Types.FETCH_PRODUCT_REQUEST,
  payload: {
    product_id,
    page: page || "1"
  }
});
