import { takeEvery, call, put, all } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { postEntities } from '../../../shared/libs/requestsManager';
import { postProductSuccess, postProductError, clearError } from '../actions/productActionCreators';
import { redirectToRoot } from '../../../shared/libs/redirects';
import { CREATE_REQUEST } from '../constants/createProductConstants';
import { PRODUCT_API_ENTRY_POINT } from '../../shared/constants/commonConstants';

export function* postProduct({ payload }) {
  try {
    yield put(showLoading());
    yield put(clearError());
    const url = PRODUCT_API_ENTRY_POINT;
    const response = yield call(postEntities, url, payload.data);
    yield put(postProductSuccess(response));
  } catch (error) {
    if (error.response.status === 401) {
      yield all([
        put(postProductError(error)),
        put(redirectToRoot()),
      ]);
    } else {
      yield put(postProductError(error));
    }
  } finally {
    yield put(hideLoading());
  }
}

export default function* watchCreateProduct() {
  yield takeEvery(CREATE_REQUEST, postProduct);
}
