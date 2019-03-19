import { call, put } from "redux-saga/effects";
import { Types } from "~/shared/constants";

import { fetchEntity } from "~/utils/requestManager";

const fetchPageContent = (product_id, page) =>
  fetchEntity(`/api/v1/products/${product_id}/pages/${page}`);

function* fetchPage(action) {
  try {
    const {
      payload: { product_id, page }
    } = action;

    const pageContent = yield call(fetchPageContent, product_id, page);
    console.log(pageContent);
    yield put({
      type: Types.FETCH_PRODUCT_PAGE_SUCCESS,
      payload: { ...pageContent.data }
    });
  } catch (e) {
    /* eslint no-console: off */
    console.log(e);
  }
}

export default fetchPage;
