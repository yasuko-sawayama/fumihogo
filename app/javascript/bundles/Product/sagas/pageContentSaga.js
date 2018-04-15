import { takeLatest, call, put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { fetchEntities } from '../../../shared/libs/requestsManager';
import { fetchPageContentSuccess, fetchPageContentError } from '../actions/productActionCreators';

import { PAGE_CONTENT_FETCH_REQUESTED } from '../constants/productConstants';

export function* fetchPageContent({ payload }) {
  try {
    yield put(showLoading('content'));
    const url = payload.url;
    const response = yield call(fetchEntities, url);
    yield put(fetchPageContentSuccess(response));
  } catch (error) {
    yield put(fetchPageContentError(error));
  } finally {
    yield put(hideLoading('content'));
  }
}

export default function* watchFetchingPage() {
  yield takeLatest(PAGE_CONTENT_FETCH_REQUESTED, fetchPageContent);
}
