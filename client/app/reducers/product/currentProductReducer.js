import { Types } from "~/shared/constants";

const currentProductReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.FETCH_PRODUCT_SUCCESS: {
      return payload.product;
    }

    case Types.TOGGLE_PRODUCT_FAV: {
      return {
        ...state,
        favorite: {
          count: action.payload.faved
            ? state.favorite.count + 1
            : state.favorite.count - 1,
          myLike: action.payload.faved
        }
      };
    }

    case Types.TOGGLE_PRODUCT_FAV_SUCCESS: {
      return {
        ...state,
        favorite: {
          count: action.payload.count
        }
      };
    }

    default:
      return state;
  }
};

export default currentProductReducer;
