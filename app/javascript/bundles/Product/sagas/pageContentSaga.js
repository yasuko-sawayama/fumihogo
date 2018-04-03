import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { fetchEntities } from '../../../shared/libs/requestsManager';
import { fetchPageContentSuccess, fetchPageContentError } from '../actions/productActionCreators';

import { PAGE_CONTENT_FETCH_REQUESTED } from '../constants/productConstants';

export function* fetchPageContent(action) {
  try {
    const url = `/products/${action.payload.productId}/pages/${action.payload.pageId}/`;
    const response = yield call(fetchEntities, url);
    yield put(fetchPageContentSuccess(response));
  } catch (error) {
    yield put(fetchPageContentError(error));
  }
}

export default function* watchFetchingPage() {
  yield takeLatest(PAGE_CONTENT_FETCH_REQUESTED, fetchPageContent);
}
