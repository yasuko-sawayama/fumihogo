import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import ProductReducer from '../reducers/productReducer';

// placeholder
const middleware = {};

const configureStore = railsProps => (
  createStore(
    combineReducers({
      product: ProductReducer,
    }),
    railsProps,
    composeWithDevTools(applyMiddleware(...middleware)),
  ));

export default configureStore;
