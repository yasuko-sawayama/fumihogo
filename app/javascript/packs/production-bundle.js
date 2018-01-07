import ReactOnRails from 'react-on-rails';

import HelloWorldApp from '../bundles/HelloWorld/startup/HelloWorldApp';
import ProductApp from '../bundles/Product/startup/ProductApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp,
  ProductApp,
});
