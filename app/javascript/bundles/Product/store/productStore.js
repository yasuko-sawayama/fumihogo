import { createStore, combineReducers, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import createSagaMiddleware from "redux-saga";
import { reducer as formReducer } from "redux-form";

import { composeWithDevTools } from "redux-devtools-extension";

import currentUserReducer from "../../shared/reducers/currentUserReducer";
import ProductReducer from "../reducers/productReducer";
import alertReducer from "../reducers/alertReducer";
import productSaga from "../sagas/saga";

export const history = createHistory({ basename: "/products" });

const reduxRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middleware = [reduxRouterMiddleware, sagaMiddleware];

const configureStore = (railsProps) => {
  const store = createStore(
    combineReducers({
      currentUser: currentUserReducer,
      alert: alertReducer,
      product: ProductReducer,
      router: routerReducer,
      form: formReducer,
      loadingBar: loadingBarReducer
    }),
    railsProps,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(productSaga);
  return store;
};

export default configureStore;
