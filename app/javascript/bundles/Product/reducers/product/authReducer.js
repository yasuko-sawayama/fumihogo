import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR
} from '../../constants/productConstants';

const initialState = {
  update: false,
  show: false
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
  case PRODUCT_FETCH_SUCCESS:
    return {
      update: action.payload.product.auth.update,
      show: action.payload.product.auth.show,
    };
  default:
    return state;
  }
};

export default authReducer;
