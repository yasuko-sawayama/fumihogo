import { Types } from "~/shared/constants";

const initialState = null;

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_PRODUCT_PAGE_SUCCESS:
      return {
        type: Types.SUCCESS,
        content: action.payload.message || "成功しました。"
      };
    case Types.UPDATE_PRODUCT_PAGE_ERROR:
      return {
        type: Types.ERROR,
        content: action.payload.message || "エラーです。"
      };
    default:
      return state;
  }
};

export default messageReducer;
