import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR,
  PRODUCT_UPDATE_SUCCESS
} from '../../constants/productConstants';

const aboutReducer = (state = {}, action) => {
  switch (action.type) {
  case PRODUCT_FETCH_SUCCESS:
  case PRODUCT_UPDATE_SUCCESS:
    return {
      created_at: action.payload.product.about.created_at,
      character_count: action.payload.product.about.character_count,
      pageCount: action.payload.product.about.pageCount,
      privacyLevel: action.payload.product.about.privacyLevel,
      impressionCount: action.payload.product.about.impressionCount,
      permissionsList: action.payload.product.about.permissionsList,
    };

  // case PRODUCT_FETCH_ERROR:
  //   return {};

  default:
    return state;
  }
};

export default aboutReducer;
