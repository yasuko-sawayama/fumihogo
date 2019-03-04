import { takeLatest, call, put, all, take } from "redux-saga/effects";

import { Types } from "~/shared/constants";
import { fetchEntity } from "~/utils/requestManager";

const fetchPageContent = (product_id, page) =>
  fetchEntity(`/api/v1/products/${product_id}/pages/${page}`);

const fetchProductEntity = product_id =>
  fetchEntity(`/api/v1/products/${product_id}`);

function* fetchPage(action) {
  try {
    const {
      payload: { product_id, page }
    } = action;
    const pageContent = yield call(fetchPageContent, product_id, page);
    yield put({
      type: Types.FETCH_PRODUCT_PAGE_SUCCESS,
      payload: { ...pageContent.data }
    });
  } catch (e) {
    console.log(e);
  }
}

function* fetchProduct(action) {
  try {
    const {
      payload: { product_id }
    } = action;
    const product = yield call(fetchProductEntity, product_id);
    yield put({
      type: Types.FETCH_PRODUCT_SUCCESS,
      payload: { ...product.data }
    });
  } catch (e) {
    console.log(e);
  }
}

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
