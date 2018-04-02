import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import ProductReducer from '../reducers/productReducer';

export const history = createHistory({ basename: '/products', });

const middleware = routerMiddleware(history);

const configureStore = railsProps => (
  createStore(
    combineReducers({
      product: ProductReducer,
      router: routerReducer,
    }),
    railsProps,
    composeWithDevTools(applyMiddleware(middleware)),
  ));

export default configureStore;
