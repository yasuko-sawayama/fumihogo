import React from "react";
import { Provider } from "react-redux";
import ReactOnRails from "react-on-rails";
import { AppContainer } from "react-hot-loader";
import ReactDOM from "react-dom";

import rootSaga from "~/sagas";
import { sagaMiddleware } from "../../../stores/sharedStore";
import Editor from "../components/Editor";

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const EditorApp = (props, _railsContext, domNodeId) => {
  const render = ReactDOM.hydrate;
  // eslint-disable-next-line no-param-reassign
  delete props.prerender;

  // This is where we get the existing store.
  const store = ReactOnRails.getStore("sharedStore");

  sagaMiddleware.run(rootSaga);

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
  renderApp(Editor);

  if (module.hot) {
    module.hot.accept(["../components/Editor"], () => {
      renderApp(Editor);
    });
  }
};

export default EditorApp;