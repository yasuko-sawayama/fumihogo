import { combineReducers } from 'redux';

// dummy for placeholder
const id = (state = '', action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
    return action.payload.product.id;

  case PRODUCT_FETCH_ERROR:
    return state;

  default:
    return state;
  }
};

const ProductReducer = combineReducers({
  id,
});

export default ProductReducer;
