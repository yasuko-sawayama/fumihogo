import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form'

import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { postEntities } from '../../../shared/libs/requestsManager';
import { postProductSuccess, postProductError } from '../actions/productActionCreators';
import { CREATE_REQUEST } from '../constants/createProductConstants';
import { PRODUCT_API_ENTRY_POINT } from '../../shared/constants/commonConstants';

export function* postProduct({ payload, }) {
  try {
    yield put(showLoading());
    const url = PRODUCT_API_ENTRY_POINT;
    const response = yield call(postEntities, url, payload.data);
    yield put(postProductSuccess(response));
  } catch (error) {
    yield put(postProductError(error));
  } finally {
    yield put(hideLoading());
  }
}

export default function* watchCreateProduct() {
  yield takeLatest(CREATE_REQUEST, postProduct);
}
