import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import ProductReducer from '../reducers/productReducer';
import productSaga from '../sagas/saga';

export const history = createHistory({ basename: '/products', });

const reduxRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middleware = [reduxRouterMiddleware, sagaMiddleware];

const configureStore = railsProps => {
  const store = createStore(
    combineReducers({
      product: ProductReducer,
      router: routerReducer,
    }),
    railsProps,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(productSaga);
  return store;
};

export default configureStore;
