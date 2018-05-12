import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";

import Product from "../Product";

describe("Product Component", () => {
  it("renderd correctry", () => {
    const params = {
      product: {
        id: 1,
        title: "作品タイトル",
        currentPage: 1,
        about: {
          pageCount: 3
        },
        author: {
          nickname: "作者",
          avator: ""
        },
        pageInfo: {
          pageTitle: "1ページ目のタイトル"
        },
        pages: [
          {
            api: "/api/v1/products/23/pages/1",
            id: 1,
            impressionCount: 3,
            position: 1,
            title: "ページ1"
          }
        ],
        auth: {
          update: false,
          show: true
        }
      },
      currentUser: {},
      match: {
        params: { id: 1 }
      },
      actions: {
        fetchProduct: jest.fn(),
        changePage: jest.fn(),
        fetchPageContent: jest.fn()
      }
    };

    const mockEntry = (
      <MemoryRouter>
        <Product {...params} />
      </MemoryRouter>
    );

    const tree = shallow(mockEntry);
    expect(tree.find(Product)).toHaveLength(1);
  });
});
