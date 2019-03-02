import { Types } from "~/shared/constants";

export const fetchProductPageRequest = (product_id, page) => ({
  type: Types.FETCH_PRODUCT_PAGE_REQUEST,
  payload: {
    product_id,
    page: page || "1"
  }
});

export const fetchProductRequest = product_id => ({
  type: Types.FETCH_PRODUCT_REQUEST,
  payload: { product_id }
});
