import { Types } from "~/shared/constants";

const currentProductReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.FETCH_PRODUCT_SUCCESS: {
      return payload.product;
    }

    case Types.TOGGLE_PRODUCT_FAV: {
      if (!state) return null;
      return {
        ...state,
        favorite: {
          count: action.payload.faved
            ? state.favorite.count + 1
            : state.favorite.count - 1,
          faved: action.payload.faved
        }
      };
    }

    case Types.TOGGLE_PRODUCT_FAV_SUCCESS: {
      if (!state) return null;
      return {
        ...state,
        favorite: {
          count: action.payload.count,
          faved: action.payload.faved
        }
      };
    }

    default:
      return state;
  }
};

export default currentProductReducer;
