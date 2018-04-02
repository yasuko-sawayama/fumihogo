import { PAGE_CONTENT_FETCH_SUCCESS } from '../../constants/productConstants';


const contentReducer = (state = '', action) => {
  console.log(action.type);
  switch (action.type) {
  case PAGE_CONTENT_FETCH_SUCCESS:
    return 'aiueo';
  default:
    return state;
  }
};

export default contentReducer;
