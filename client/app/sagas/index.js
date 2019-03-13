import { takeLatest, all } from "redux-saga/effects";

import { Types } from "~/shared/constants";
import fetchPage from "./fetchPage";
import fetchProduct from "./fetchProduct";

function* productPageSaga() {
  yield takeLatest(Types.FETCH_PRODUCT_PAGE_REQUEST, fetchPage);
}

function* productSaga() {
  yield takeLatest(Types.FETCH_PRODUCT_REQUEST, fetchProduct);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

function* rootSaga() {
  const sagas = [productSaga(), productPageSaga()];

  yield all(sagas);
}
export default rootSaga;
