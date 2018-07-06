import React from "react";
import { MemoryRouter } from "react-router";
import { mount, shallow } from "enzyme";

import PageLink from "../PageLink";

describe("PageLink", () => {
  const title = "ページタイトル";

  it("render", () => {
    const tree = shallow(<PageLink title="タイトル" productId={1} position={1} />);
    expect(tree).toMatchSnapshot();
  });

  it("正しいURLが生成できていること", () => {
    const node = (
      <MemoryRouter>
        <PageLink title={title} productId={1} position={1} />
      </MemoryRouter>
    );

    const tree = mount(node);
    const button = tree.find("a");
    expect(button.props().href).toBe("/1/pages/1");
  });

  it("タイトルが表示できること", () => {
    const node = (
      <MemoryRouter>
        <PageLink title={title} productId={1} position={1} />
      </MemoryRouter>
    );

    const wrapper = mount(node);

    expect(wrapper).toHaveText("1. ページタイトル");
  });
});
