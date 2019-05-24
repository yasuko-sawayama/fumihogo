/* eslint import/prefer-default-export: off */

import { Types } from "~/shared/constants";
import { convertToRaw } from "draft-js";
import { draftToMarkdown}  from "markdown-draft-js";

export const updateProductPageRequest = formValue => {
  const markdown = draftToMarkdown(convertToRaw(formValue.content))

  return {
    type: Types.UPDATE_PRODUCT_PAGE_REQUEST,
    payload: {
      ...formValue,
      content: markdown
    }
  };
}
