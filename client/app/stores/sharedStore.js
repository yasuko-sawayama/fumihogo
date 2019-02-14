import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "../reducers";

const middleware = [thunk];

/*
 *  Export a function that takes the props and returns a Redux store
 *  This is used so that 2 components can have the same store.
 *  デフォルトはStorybook用
 */
const sharedStore = (props = {}, railsContext = {}) => {
  // eslint-disable-next-line no-param-reassign
  delete props.prerender;

  const combinedReducer = combineReducers(reducers);
  const newProps = { ...props, railsContext };
  return composeWithDevTools(applyMiddleware(...middleware))(createStore)(
    combinedReducer,
    newProps
  );
};

export default sharedStore;
