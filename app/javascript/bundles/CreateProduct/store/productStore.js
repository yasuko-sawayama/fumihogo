import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';

import { composeWithDevTools } from 'redux-devtools-extension';

import productReducer from '../reducers/productReducer';
import errorReducer from '../reducers/errorReducer';
import currentUserReducer from '../../shared/reducers/currentUserReducer';

import productSaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const configureStore = railsProps => {
  console.log(railsProps)
  const store = createStore(
    combineReducers({
      currentUser: currentUserReducer,
      form: formReducer,
      product: productReducer,
      errorMessage: errorReducer,
      loadingBar: loadingBarReducer,
    }),
    railsProps,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(productSaga);
  return store;
};

export default configureStore;
