import React from "react";
import { mount, shallow } from "enzyme";
import { Panel } from "react-bootstrap";

import TableOfContents from "../TableOfContents";

describe("TableOfContents", () => {
  const pages = [];

  it("can render", () => {
    const tree = mount(<TableOfContents productId={1} pages={pages} isOpen />);
    expect(tree.find(".panel-title")).toHaveText("もくじ");
  });

  // HOCだとpropsを与えても子要素がrerenderされない？ので保留
  // it("propが変更されるとパネルが閉じること", () => {
  //   const tree = mount(<TableOfContents productId={1} pages={pages} isOpen={true} />);
  //   const panel = tree.find(Panel);

  //   expect(panel.props().expanded).toBe(true);
  //   tree.setProps({ isOpen: false });
  //   tree.update();
  //   expect(panel.props().expanded).toBe(false);
  // });
});
