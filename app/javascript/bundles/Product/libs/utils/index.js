import { join } from "../../../shared/utils/join";

export const productUrl = id => `/${id}/`;
export const pageUrl = (pagePosition, productId) => join(productUrl(productId), `/pages/${pagePosition}`);
