import { call, put, all } from "redux-saga/effects";
import { Types } from "~/shared/constants";
import { stopSubmit } from "redux-form";

import { updateEntities } from "~/utils/requestManager";

import { fetchProductPageRequest } from "../actions";

const updateProductPageEntity = payload =>
  updateEntities(
    `/api/v1/products/${payload.productId}/pages/${payload.pageOrder}`,
    updateValues(payload)
  )
    .then(results => console.log(results) || { product: results.data })
    .catch(error => ({ error: error.response }));

const updateValues = formValue => formValue;

function* updateProduct(action) {
  const { payload } = action;

  const { product, error } = yield call(updateProductPageEntity, payload);

  if (product) {
    yield all([
      put({
        type: Types.UPDATE_PRODUCT_PAGE_SUCCESS,
        payload: {
          productId: product.id,
          pageOrder: product.pageOrder,
          type: Types.SUCCESS,
          message: "ページを更新しました。"
        }
      }),
      put(fetchProductPageRequest(payload.productId, payload.pageOrder)),
      call(
        (window.location.href = `/products/${payload.productId}/pages/${
          payload.pageOrder
        }`)
      )
    ]);
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

export default updateProduct;
