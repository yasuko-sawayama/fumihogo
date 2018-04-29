import { CREATE_SUCCESS } from '../constants/createProductConstants';

const productReducer = (state = {}, action) => {
  switch (action.type) {
  case CREATE_SUCCESS:
    return action.payload.data.product;
  default:
    return state;
  }
};

export default productReducer;
