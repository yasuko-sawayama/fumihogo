import { takeEvery, call, put } from "redux-saga/effects";

import { showLoading, hideLoading } from "react-redux-loading-bar";

import { updateEntities } from "../../../shared/libs/requestsManager";
import { updatePageSuccess, updatePageError } from "../actions/pageEditActionCreators";

import { PAGE_UPDATE_REQUESTED } from "../constants/pageEditConstants";
import { PRODUCT_API_ENTRY_POINT } from "../../shared/constants/commonConstants";

export function* updatePage({ payload }) {
  try {
    yield put(showLoading());
    //    yield put(clearError());

    const url = `${PRODUCT_API_ENTRY_POINT}${payload.id}/pages/${payload.pageId}`;
    const response = yield call(updateEntities, url, payload.data);
    yield put(updatePageSuccess(response));
  } catch (error) {
    yield put(updatePageError(error));
  } finally {
    yield put(hideLoading());
  }
}

export default function* watchUpdatePage() {
  yield takeEvery(PAGE_UPDATE_REQUESTED, updatePage);
}
