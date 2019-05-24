import { call, put } from "redux-saga/effects";
import { Types } from "~/shared/constants";
import { change } from "redux-form";
import { fetchEntity } from "~/utils/requestManager";

import { markdownToDraft } from "markdown-draft-js";
import { convertFromRaw } from "draft-js";

const fetchPageContent = (product_id, page) =>
  fetchEntity(`/api/v1/products/${product_id}/pages/${page}`);

function* fetchPage(action) {
  try {
    const {
      payload: { product_id, page }
    } = action;

    const pageContent = yield call(fetchPageContent, product_id, page);

    yield put({
      type: Types.FETCH_PRODUCT_PAGE_SUCCESS,
      payload: { ...pageContent.data }
    });

    // update Editor Form
    // エディタのraw形式に変換
    const editorContent = convertFromRaw(markdownToDraft(pageContent.data.page.editContent));

    yield put(change("edit", "content", editorContent));
    yield put(change("edit", "title", pageContent.data.page.product.title));
    yield put(change("edit", "pageTitle", pageContent.data.page.pageTitle));
  } catch (e) {
    /* eslint no-console: off */
    console.log(e);
  }
}

export default fetchPage;
