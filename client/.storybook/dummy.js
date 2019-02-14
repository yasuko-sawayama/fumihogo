export const store = {
  products: [
    {
      id: 2,
      title: "ナイスなタイトル",
      description: "短い説明なんですよ。",
      auth: {
        update: true,
        show: true
      },
      author: {
        nickname: "sawayama_yasuko",
        id: 1
      },
      info: {
        //TODO: WithKnobs
        created_at: "2018-12-11",
        character_count: 20000,
        page_count: 123,
        impression_count: 1233,

        //TODO: WithKnobs
        privacy_level: "list",
        privacy_level_text: "リスト限定公開",
        permission_list: {
          id: 2,
          name: "原稿用"
        }
      }
    }
  ]
};

import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "redux-thunk";

import reducers from "../app/reducers";

// const middleware = [];

/*
 *  Export a function that takes the props and returns a Redux store
 *  This is used so that 2 components can have the same store.
 */
export default props => {
  // eslint-disable-next-line no-param-reassign
  delete props.prerender;

  const combinedReducer = combineReducers(reducers);
  return composeWithDevTools(applyMiddleware(middleware))(createStore)(
    combinedReducer,
    props
  );
};
