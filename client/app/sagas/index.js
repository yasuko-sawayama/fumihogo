import { takeLatest, call, put, all } from "redux-saga/effects";

import { TYPES } from "~/shared/constants";
import { fetchProductRequest, fetchProductSuccess } from "~/actions";

function* fetchProduct(action) {
  console.log(action);
  try {
    const product = yield call(fetchRequest, "/products");
    yield put(fetchProductSuccess(product));
  } catch (e) {
    console.log(e);
  }
}

function* productSaga() {
  yield takeLatest(TYPES.FETCH_PRODUCT_REQUEST, fetchProduct);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    productSaga()
  ]);
}

export default rootSaga;
