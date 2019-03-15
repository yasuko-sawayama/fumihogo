import { Types } from "~/shared/constants";

export const toggleFav = (productId, faved) => ({
  type: Types.TOGGLE_PRODUCT_FAV,
  payload: {
    productId,
    faved
  }
});
