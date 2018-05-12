import { join } from "../../../shared/utils/join";

export const productUrl = id => `/products/${id}/`;
export const pageUrl = (pagePosition, productId) => join(productUrl(productId), `/pages/${pagePosition}`);
export const pageTitle = (pages, pagePosition) =>
  pages.find(page => page.position === pagePosition).title;
