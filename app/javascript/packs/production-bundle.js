import 'babel-polyfill';
import ReactOnRails from 'react-on-rails';

import ProductApp from '../bundles/Product/startup/ProductApp';
import CreateProductApp from '../bundles/CreateProduct/startup/CreateProductApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ProductApp,
  CreateProductApp,
});
