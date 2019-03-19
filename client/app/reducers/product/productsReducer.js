import { Types } from "~/shared/constants";

const initialState = [];

const favCount = (initial, faved) => (faved ? initial + 1 : initial - 1);

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE_PRODUCT_FAV: {
      if (state === []) return [];

      const { productId, faved } = action.payload;

      return state.map(product =>
        product.id === productId
          ? {
              ...product,
              favorite: {
                count: favCount(product.favorite.count, faved),
                faved
              }
            }
          : product
      );
    }

    case Types.TOGGLE_PRODUCT_FAV_SUCCESS:
    case Types.TOGGLE_PRODUCT_FAV_ERROR: {
      if (state === []) return [];

      const { productId, count, faved } = action.payload;
      return state.map(product =>
        product.id === productId
          ? {
              ...product,
              favorite: {
                count,
                faved
              }
            }
          : product
      );
    }

    default:
      return state;
  }
};

export default productsReducer;
