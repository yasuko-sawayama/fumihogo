import { call, put } from "redux-saga/effects";
import { Types } from "~/shared/constants";
import { stopSubmit } from "redux-form";

import { updateEntities } from "~/utils/requestManager";

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

    yield put({
      type: Types.UPDATE_PRODUCT_PAGE_SUCCESS,
      payload: {
        productId: product.id,
        pageOrder: product.pageOrder,
        type: Types.SUCCESS,
        message: "ページを更新しました。"
      }
    });
  } catch (error) {
    /* eslint no-console: off */
    console.log(error);
    yield put({
      type: Types.UPDATE_PRODUCT_PAGE_ERROR,
      payload: {
        type: Types.ERROR,
        message: `保存できませんでした。\nERROR: ${error}`
      }
    });
    yield put(stopSubmit("edit", error));
  }
}

export default updateProduct;
