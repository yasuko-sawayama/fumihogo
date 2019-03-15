import { call, put } from "redux-saga/effects";
import { Types } from "~/shared/constants";

import { postEntities, deleteEntity } from "~/utils/requestManager";

const toggleFavoriteEntity = (productId, like) =>
  like
    ? postEntities(`/api/v1/products/${productId}/likes`, null)
    : deleteEntity(`/api/v1/products/${productId}/likes`);

function* fetchProduct(action) {
  const {
    payload: { productId, faved, prevCount }
  } = action;

  try {
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

    yield put({
      type: Types.TOGGLE_PRODUCT_FAV_ERROR,
      payload: {
        productId,
        count: prevCount,
        faved: !faved
      }
    });
  }
}

export default fetchProduct;
