import { takeLatest, call, put, all } from "redux-saga/effects";

import { Types } from "~/shared/constants";

const fetchRequest = props => new Promise(() => console.log(props));

function* fetchProduct(action) {
  try {
    console.log("aaaaaaa");
    console.log(action);
    const product = yield call(fetchRequest, "/products");
    yield put({ type: Types.FETCH_PRODUCT_SUCCESS, product });
  } catch (e) {
    console.log(e);
  }
}

function* productSaga() {
  yield takeLatest(Types.FETCH_PRODUCT_REQUEST, fetchProduct);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

function* rootSaga() {
  const sagas = [productSaga()];

  yield all(sagas);
}
export default rootSaga;
