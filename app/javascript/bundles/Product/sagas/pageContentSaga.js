import { takeLatest, call, put } from "redux-saga/effects";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { change } from "redux-form";

import { fetchEntities } from "../../../shared/libs/requestsManager";
import {
  fetchPageContentSuccess,
  fetchPageContentError,
  changePage
} from "../actions/productActionCreators";

import { PRODUCT_API_ENTRY_POINT } from "../../shared/constants/commonConstants";

import { PAGE_CONTENT_FETCH_REQUESTED } from "../constants/productConstants";

export function* fetchPageContent({ payload }) {
  try {
    yield put(showLoading("content"));
    const url = `${PRODUCT_API_ENTRY_POINT}${payload.productId}/pages/${payload.id}`;
    const response = yield call(fetchEntities, url);
    console.log(response.data.page.content);
    yield [
      put(fetchPageContentSuccess(response)),
      put(change("edit_page", "content", response.data.page.content)),
      put(change("edit_page", "title", response.data.page.title)),
      put(changePage(payload.id))
    ];
  } catch (error) {
    yield put(fetchPageContentError(error));
  } finally {
    yield put(hideLoading("content"));
  }
}

export default function* watchFetchingPage() {
  yield takeLatest(PAGE_CONTENT_FETCH_REQUESTED, fetchPageContent);
}
