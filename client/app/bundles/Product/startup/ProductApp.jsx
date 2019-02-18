import React from "react";
import { Provider } from "react-redux";
import ReactOnRails from "react-on-rails";
import { AppContainer } from "react-hot-loader";
import ReactDOM from "react-dom";

import Product from "../components/Product";

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const ProductApp = (props, _railsContext, domNodeId) => {
  const render = props.prerender ? ReactDOM.hydrate : ReactDOM.render;
  // eslint-disable-next-line no-param-reassign
  delete props.prerender;

  console.log(props);

  // This is where we get the existing store.
  const store = ReactOnRails.getStore("sharedStore");

  console.log(store);

  // const productStore = createStore(
  //   combinedReducer,
  //   props,
  //   applyMiddleware(middleware)
  // );

  // Provider uses this.props.children, so we're not typical React syntax.
  // This allows redux to add additional props to the HelloWorldContainer.
  const renderApp = Komponent => {
    const element = (
      <AppContainer>
        <Provider store={store}>
          <Komponent/>
        </Provider>
      </AppContainer>
    );
    render(element, document.getElementById(domNodeId));
  };
  renderApp(Product);

  if (module.hot) {
    module.hot.accept(["../components/Product"], () => {
      renderApp(Product);
    });
  }
};

export default ProductApp;
