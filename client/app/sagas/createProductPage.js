import { call, put, all } from "redux-saga/effects";
import { Types } from "~/shared/constants";
import { stopSubmit } from "redux-form";

import { postEntities } from "~/utils/requestManager";

const createProductPageEntity = payload =>
  postEntities(`/api/v1/products/${payload.productId}/pages`, payload)
    .then(results => ({ product: results.data }))
    .catch(error => ({ error: error.response }));

function* createProductPage(action) {
  const { payload } = action;

  const { page, error } = yield call(createProductPageEntity, payload)

  console.log(page)
  if (page) {
    yield all([
      put({
        type: Types.CREATE_PRODUCT_PAGE_SUCCESS,
        payload: {
          productId: page.product_id,
          pageOrder: page.position,
          type: Types.SUCCESS,
          message: "新しいページを作成しました。"
        }
      }),
      // put(fetchProductPageRequest(payload.productId, payload.pageOrder)),
      call(
        (window.location.href = `/products/${page.product_id}/pages/${
          page.position
        }`)
      )
    ])
  } else {
    /* eslint no-console: off */
    console.log(error);
    yield all([
      put(stopSubmit("edit", error)),
      put({
        type: Types.UPDATE_PRODUCT_PAGE_ERROR,
        payload: {
          type: Types.ERROR,
          message: `保存できませんでした。\n ${error.data}`
        }
      })
    ]);
  }
}

export default createProductPage;