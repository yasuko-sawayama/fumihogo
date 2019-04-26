import { call, put, all } from "redux-saga/effects";
import { Types } from "~/shared/constants";
import { stopSubmit } from "redux-form";

import { updateEntities } from "~/utils/requestManager";
import { fetchProductPageRequest } from "../actions";

const updateProductPageEntity = payload =>
  updateEntities(
    `/api/v1/products/${payload.productId}/pages/${payload.pageOrder}`,
    updateValues(payload)
  );

const updateValues = formValue => formValue;

function* updateProduct(action) {
  try {
    const { payload } = action;

    const product = yield call(updateProductPageEntity, payload);

    // TODO: ページデータを再取得する
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
      put(fetchProductPageRequest(payload.productId, payload.pageOrder))
    ]);
  } catch (error) {
    /* eslint no-console: off */
    console.log(error);
    yield all([
      put(stopSubmit("edit", error)),
      put({
        type: Types.UPDATE_PRODUCT_PAGE_ERROR,
        payload: {
          type: Types.ERROR,
          message: `保存できませんでした。\nERROR: ${error}`
        }
      })
    ]);
  }
}

export default updateProduct;
