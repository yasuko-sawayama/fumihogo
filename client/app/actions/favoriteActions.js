import { Types } from "~/shared/constants";

export const toggleFav = productId => ({
  type: Types.TOGGLE_PRODUCT_FAV,
  payload: {
    productId
  }
});
