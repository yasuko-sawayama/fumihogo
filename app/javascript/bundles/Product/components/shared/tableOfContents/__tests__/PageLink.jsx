import React from "react";
import { NavLink } from "react-router-dom";
import { MemoryRouter } from "react-router";
import { mount, shallow } from "enzyme";

import PageLink from "../PageLink";

xdescribe("PageLink", () => {
  it("正しいURLが生成できていること", () => {
    const tree = shallow(<PageLink position={1} title="aaaaa" productId={1} />);
    const button = tree.find(NavLink);
    expect(button.props().to).toBe("http://example.com/products/1/pages/1");
  });

  it("タイトルが表示できること", () => {
    const title = "ページタイトル";
    const node = (
      <MemoryRouter>
        <PageLink position={1} title={title} productId={1} />
      </MemoryRouter>
    );

    const tree = mount(node);

    expect(tree).toHaveText("1. ページタイトル");
  });
});
