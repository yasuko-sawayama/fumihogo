import { Types } from "~/shared/constants";

export const fetchProductRequest = (product_id, page) => ({
  type: Types.FETCH_PRODUCT_PAGE_REQUEST,
  payload: {
    product_id,
    page: page || "1"
  }
});
