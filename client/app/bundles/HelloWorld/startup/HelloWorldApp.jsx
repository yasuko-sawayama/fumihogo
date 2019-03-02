import React from "react";
import { Provider } from "react-redux";
import ReactOnRails from "react-on-rails";
import { AppContainer } from "react-hot-loader";
import ReactDOM from "react-dom";

import HelloWorldContainer from "../containers/HelloWorldContainer";

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const HelloWorldApp = (props, _railsContext, domNodeId) => {
  const render = props.prerender ? ReactDOM.hydrate : ReactDOM.render;
  // eslint-disable-next-line no-param-reassign
  delete props.prerender;

  // This is where we get the existing store.
  const store = ReactOnRails.getStore("sharedStore");

  // Provider uses this.props.children, so we're not typical React syntax.
  // This allows redux to add additional props to the HelloWorldContainer.
  const renderApp = Komponent => {
    const element = (
      <AppContainer>
        <Provider store={store}>
          <Komponent />
        </Provider>
      </AppContainer>
    );
    render(element, document.getElementById(domNodeId));
  };
  renderApp(HelloWorldContainer);

  if (module.hot) {
    module.hot.accept(["../containers/HelloWorldContainer"], () => {
      renderApp(HelloWorldContainer);
    });
  }
};

export default HelloWorldApp;
