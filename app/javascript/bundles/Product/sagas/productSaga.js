import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { fetchEntities } from '../../../shared/libs/requestsManager';
import { fetchProductSuccess, fetchProductError } from '../actions/productActionCreators';

import { PRODUCT_FETCH_REQUESTED, PRODUCT_API_ENTRY_POINT } from '../constants/productConstants';

export function* fetchProductInfo({ payload }) {
  try {
    const url = `${PRODUCT_API_ENTRY_POINT}/${payload.productId}/`;
    const response = yield call(fetchEntities, url);
    yield put(fetchProductSuccess(response));
  } catch (error) {
    yield put(fetchProductError(error));
  };
};

export default function* watchFetchingProduct() {
  yield takeLatest(PRODUCT_FETCH_REQUESTED, fetchProductInfo);
}
