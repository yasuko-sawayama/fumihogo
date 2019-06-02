/* eslint import/prefer-default-export: off */

import { Types } from "~/shared/constants";
import { convertToRaw } from "draft-js";
import { draftToMarkdown }  from "markdown-draft-js";

const convertMarkDown = content => draftToMarkdown(convertToRaw(content));

export const updateProductPageRequest = formValue => {
  const markdown = convertMarkDown(formValue.content);

  return {
    type: Types.UPDATE_PRODUCT_PAGE_REQUEST,
    payload: {
      ...formValue,
      content: markdown
    }
  };
}

export const createNewPageRequest = formValue => {
  const markdown = convertMarkDown(formValue.content);

  return {
    type: Types.CREATE_PRODUCT_PAGE_REQUEST,
    payload: {
      ...formValue,
      content: markdown
    }
  }
}