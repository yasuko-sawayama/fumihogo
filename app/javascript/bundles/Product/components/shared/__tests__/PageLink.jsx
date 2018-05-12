import React from "react";
import { NavLink } from "react-router-dom";
import { MemoryRouter } from "react-router";
import { mount, shallow } from "enzyme";

import PageLink from "../PageLink";

describe("PageLink", () => {
  it("正しいURLが生成できていること", () => {
    const url = "http://example.com/products/1/";
    const tree = shallow(<PageLink id={1} url={url} />);
    const button = tree.find(NavLink);
    expect(button.props().to).toBe("http://example.com/products/1/pages/1");
  });

  it("タイトルが表示できること", () => {
    const url = "http://example.com/products/1/";
    const title = "ページタイトル";
    const node = (
      <MemoryRouter>
        <PageLink id={1} url={url} title={title} />
      </MemoryRouter>
    );

    const tree = mount(node);

    expect(tree).toHaveText("1. ページタイトル");
  });
});
