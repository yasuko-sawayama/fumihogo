import { call, put } from "redux-saga/effects";
import { Types } from "~/shared/constants";

import { fetchEntity } from "~/utils/requestManager";

const fetchProductEntity = product_id =>
  fetchEntity(`/api/v1/products/${product_id}`);

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

export default fetchProduct;
