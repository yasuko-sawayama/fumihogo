import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { PAGE_CONTENT_FETCH_REQUESTED } from '../constants/productConstants';

export function* fetchPageContent(action) {
  try {
    console.log('api called');
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts/1');
    console.log(response);
  } catch(error) {
    console.log(error);
  }
}

export function* watchFetchingPage() {
  console.log('watching now!');
  yield takeEvery(PAGE_CONTENT_FETCH_REQUESTED, fetchPageContent);
}

export default function* productSaga() {
  yield [
    watchFetchingPage()
  ];
}
