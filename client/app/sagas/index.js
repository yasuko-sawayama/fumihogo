import { takeLatest, call, put, spawn } from "redux-saga/effects";

import { Types } from "~/shared/constants";

function* fetchProduct(action) {
  console.log(action);
  try {
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
  const sagas = [productSaga];

  yield sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    })
  );
}
export default rootSaga;
