import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "redux-thunk";

import reducers from "../reducers";

// const middleware = [];

/*
 *  Export a function that takes the props and returns a Redux store
 *  This is used so that 2 components can have the same store.
 */
export default (props, railsContext) => {
  // eslint-disable-next-line no-param-reassign
  delete props.prerender;

  const combinedReducer = combineReducers(reducers);
  const newProps = { ...props, railsContext };
  return composeWithDevTools(applyMiddleware(middleware))(createStore)(
    combinedReducer,
    newProps
  );
};
