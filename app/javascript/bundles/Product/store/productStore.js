import { createStore } from 'redux';
import ProductReducer from '../reducers/productReducer';

const configureStore = (railsProps) => (
  createStore(ProductReducer, railsProps)
);

export default configureStore;
