/* eslint import/prefer-default-export: off */

import { Types } from "~/shared/constants";

export const updateProductPageRequest = formValue => ({
  type: Types.UPDATE_PRODUCT_PAGE_REQUEST,
  payload: {
    ...formValue
  }
});
