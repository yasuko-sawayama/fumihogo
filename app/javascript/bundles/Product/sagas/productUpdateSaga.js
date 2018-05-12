import { takeEvery, call, put } from "redux-saga/effects";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { updateEntities } from "../../../shared/libs/requestsManager";
import { updateProductSuccess, updateProductError } from "../actions/productEditActionCreators";

import { PRODUCT_UPDATE_REQUESTED } from "../constants/productConstants";
import { PRODUCT_API_ENTRY_POINT } from "../../shared/constants/commonConstants";

export function* updateProduct({ payload }) {
  try {
    yield put(showLoading());
    const url = `${PRODUCT_API_ENTRY_POINT}${payload.id}/`;
    const response = yield call(updateEntities, url, payload.data);
    yield put(updateProductSuccess(response));
  } catch (error) {
    yield put(updateProductError(error));
  } finally {
    yield put(hideLoading());
  }
}

export default function* watchUpdateProduct() {
  yield takeEvery(PRODUCT_UPDATE_REQUESTED, updateProduct);
}
