import { takeEvery, call, put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { push } from 'react-router-redux';

import { deleteEntity } from '../../../shared/libs/requestsManager';
import { pageDestroySuccess, pageDestroyError } from '../actions/pageDestroyActionCreators';

import { PAGE_DESTROY_REQUESTED } from '../constants/pageEditConstants';
import { PRODUCT_API_ENTRY_POINT } from '../../shared/constants/commonConstants';

export function* destroyPage({ payload }) {
  try {
    yield put(showLoading('content'));
    const url = `${PRODUCT_API_ENTRY_POINT}${payload.id}/pages/${payload.pageId}`;
    const response = yield call(deleteEntity, url);
    yield [
      put(pageDestroySuccess(response)),
      put(push(`/${payload.id}/`)),
    ];
  } catch (error) {
    yield put(pageDestroyError(error));
  } finally {
    yield put(hideLoading('content'));
  }
}

export default function* watchDestroyPage() {
  yield takeEvery(PAGE_DESTROY_REQUESTED, destroyPage);
}
