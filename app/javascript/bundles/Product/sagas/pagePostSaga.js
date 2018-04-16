import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { postEntities } from '../../../shared/libs/requestsManager';
import { postPageSuccess, postPageError } from '../actions/postPageActionCreators';
import { redirectToRoot } from '../../../shared/libs/redirects';

import { PAGE_POST_REQUESTED } from '../constants/productConstants';
import { PRODUCT_API_ENTRY_POINT } from '../../shared/constants/commonConstants';

export function* postPage({ payload, }) {
  try {
    yield put(showLoading());
//    yield put(clearError());
    const url = `${PRODUCT_API_ENTRY_POINT}${payload.productId}/pages/`;
    const response = yield call(postEntities, url, payload.data);
    yield put(postPageSuccess(response));
    console.log(response);
  } catch (error) {
    yield [
      put(postPageError(error)),
      // put(redirectToRoot()),
    ]
  } finally {
    yield put(hideLoading());
  }
}

export default function* watchPostPage() {
  yield takeEvery(PAGE_POST_REQUESTED, postPage);
}
