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
import Product from "../Product";
import ProductList from "../ProductList";
import InfoBox from "../product/infoBox/Infobox";
import ProductReading from "../ProductReading";

addDecorator(withViewport("iphone6"));

const products = [
  {
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

const store = sharedStore({
  productData: {
    info: { listType: "author", author: { name: "やすこ" } },
    products,
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
    }
  }
});

storiesOf("作品リスト", module)
  .addDecorator(story => (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/", "products"]}>{story()}</MemoryRouter>
    </Provider>
  ))
  .addDecorator(withKnobs)
  .addDecorator(withViewport())
  .add("基本レイアウト", () => {
    return <Product />;
  })
  .add("作品リスト", () => {
    return <ProductList />;
  })
  .add("作品パネル", () => (
    <InfoBox
      product={{
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
      }}
    />
  ));

const emptyStore = sharedStore({
  productData: {
    info: { listType: "author", author: { name: "やすこ" } },
    products
  }
});

storiesOf("作品ページ:作品がない場合", module)
  .addDecorator(story => (
    <Provider store={emptyStore}>
      <MemoryRouter initialEntries={["/", "products"]}>{story()}</MemoryRouter>
    </Provider>
  ))
  .add("閲覧ページ", () => (
    <ProductReading match={{ params: { product_id: "1" } }}/>
  ));
