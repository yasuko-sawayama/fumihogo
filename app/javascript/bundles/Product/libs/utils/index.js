/* eslint-disable import/prefer-default-export */

import { join } from "../../../shared/utils/join";

export const productUrl = id => `/${id}/`;

export const pageUrl = (pagePosition, productId) =>
  join(productUrl(productId), `/pages/${pagePosition}`);

export const pageTitle = (pages, pagePosition) => {
  const currentPage = pages.find(page => page.position === pagePosition);
  return currentPage ? currentPage.title : "";
};
