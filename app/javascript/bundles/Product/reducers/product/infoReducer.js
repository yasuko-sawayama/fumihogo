import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR,
  PRODUCT_UPDATE_SUCCESS
} from "../../constants/productConstants";


const infoReducer = (state = {}, action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
  case PRODUCT_UPDATE_SUCCESS:
    return action.payload.product.info;

  case PRODUCT_FETCH_ERROR:
    return {};

  default:
    return state;
  }
};

export default infoReducer;
