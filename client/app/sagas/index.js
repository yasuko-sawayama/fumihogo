import { takeLatest, call, put, all } from "redux-saga/effects";

import { Types } from "~/shared/constants";
import { fetchEntity } from "~/utils/requestManager";

const fetchPageContent = (product_id, page) =>
  fetchEntity(`/api/v1/products/${product_id}/pages/${page}`);

function* fetchPage(action) {
  try {
    const {
      payload: { product_id, page }
    } = action;
    const product = yield call(fetchPageContent, product_id, page);
    yield put({
      type: Types.FETCH_PRODUCT_PAGE_SUCCESS,
      payload: { ...product.data }
    });
  } catch (e) {
    console.log(e);
  }
}

function* productPageSaga() {
  yield takeLatest(Types.FETCH_PRODUCT_PAGE_REQUEST, fetchPage);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

function* rootSaga() {
  const sagas = [productPageSaga()];

  yield all(sagas);
}
export default rootSaga;
