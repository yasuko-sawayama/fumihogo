import { takeLatest, call, put, all} from "redux-saga/effects";

import { fetchEntity } from "../utils/requestManager";
import { Types } from "~/shared/constants";

const fetchProductInfo = (product_id, page_id=1) => fetchEntity(`/api/v1/products/${product_id}/pages/${page_id}`);

function* fetchProduct(action) {
  try {
    const product = yield call(fetchProductInfo, action.payload.product_id);
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
  // const sagas = [productSaga];
  yield all([productSaga()])


/*  yield sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          console.log(saga)
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    })
  );*/
}
export default rootSaga;
