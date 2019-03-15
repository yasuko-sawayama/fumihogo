import { call, put } from "redux-saga/effects";
import { Types } from "~/shared/constants";

import { postEntities, deleteEntity } from "~/utils/requestManager";

const toggleFavoriteEntity = (productId, like) =>
  like
    ? postEntities(`/api/v1/products/${productId}/likes`, null)
    : deleteEntity(`/api/v1/products/${productId}/likes`);

function* fetchProduct(action) {
  try {
    const {
      payload: { productId, faved }
    } = action;
    const fav = yield call(toggleFavoriteEntity, productId, faved);
    yield put({
      type: Types.TOGGLE_PRODUCT_FAV_SUCCESS,
      payload: {
        productId,
        count: fav.data.count,
        faved: fav.data.myLike
      }
    });
  } catch (e) {
    console.log(e);
  }
}

export default fetchProduct;
