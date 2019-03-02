import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

// import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs/react";
import { withViewport } from "@storybook/addon-viewport";
import sharedStore from "~/stores/sharedStore";
import ProductReading from "../ProductReading";
import ContentReading from "../product/content/ContentReading";

const store = sharedStore({
  productData: {
    info: { listType: "author", author: { name: "やすこ" } },
    products: null,
    currentProduct: {
      id: 1,
      title: "素敵なタイトル",
      description: "短い説明",
      auth: {
        update: true,
        show: boolean("show", true)
      },
      author: {
        nickname: "sawayama_yasuko",
        id: 1
      },
      info: {
        created_at: text("created_at", "2018-12-11"),
        character_count: number("character_count", 321),
        page_count: 123,
        impression_count: 1233,

        privacy_level: text("privacy_level", "private"),
        privacy_level_text: "リスト限定公開",
        permission_list: {
          id: 2,
          name: "原稿用"
        }
      }
    },
    currentPage: {
      id: 1,
      content: text("本文", "あいうえお")
    }
  }
});

addDecorator(withViewport("iphone6"));
storiesOf("個別作品ページ", module)
  .addDecorator(story => (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/products/1"]}>{story()}</MemoryRouter>
    </Provider>
  ))
  .addDecorator(withKnobs)
  .addDecorator(withViewport())
  .add("閲覧ページ", () => (
    <ProductReading
      match={{ params: { product_id: "1" }, path: "/products/:product_id" }}
    />
  ))
  .add("作品本文", () => <ContentReading content={text("本文", "テスト用")} />);
