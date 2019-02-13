import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

import Product from "../Product";
import ProductList from "../ProductList";

storiesOf("作品ページ", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/", "products"]}>{story()}</MemoryRouter>
  ))
  .add("基本レイアウト", () => {
    return <Product/>;
  })
  .add("作品リスト", () => {
    const products = [
      {
        id: 1,
        title: "素敵なタイトル",
        description: "短い説明",
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
          character_count: 321,
          page_count: 123,
          impression_count: 1233,

          //TODO: WithKnobs
          privacy_level: "private",
          privacy_level_text: "リスト限定公開",
          permission_list: {
            id: 2,
            name: "原稿用"
          }
        }
      },
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
    ];

    return <ProductList products={products}/>;
  });
