import { takeLatest, call, put } from "redux-saga/effects";
import { push } from "react-router-redux";

import { showLoading, hideLoading } from "react-redux-loading-bar";

import { fetchEntities } from "../../../shared/libs/requestsManager";
import { fetchProductSuccess, fetchProductError } from "../actions/productActionCreators";

import { PRODUCT_FETCH_REQUESTED } from "../constants/productConstants";
import { PRODUCT_API_ENTRY_POINT } from "../../shared/constants/commonConstants";

export function* fetchProductInfo({ payload }) {
  try {
    yield put(showLoading());
    const url = `${PRODUCT_API_ENTRY_POINT}/${payload.productId}/`;
    const response = yield call(fetchEntities, url);
    yield put(fetchProductSuccess(response));
  } catch (error) {
    yield [
      put(fetchProductError(error)),
      put(push("/"))
    ];
  } finally {
    yield put(hideLoading());
  }
}

export default function* watchFetchingProduct() {
  yield takeLatest(PRODUCT_FETCH_REQUESTED, fetchProductInfo);
}
