import { Types } from "~/shared/constants";

const currentProductReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.FETCH_PRODUCT_SUCCESS: {
      return payload.product;
    }

    default:
      return state;
  }
};

export default currentProductReducer;
