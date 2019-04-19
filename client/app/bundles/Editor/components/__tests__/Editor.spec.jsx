import React from "react";
import { shallow } from "enzyme";

import Editor from "../Editor";

describe("エディタフォームのテスト", function() {
  it("should be rendered", function() {
    const wrapper = shallow(<Editor />);
    expect(wrapper.find("Route").length).toBe(2);
  });

  // URLに応じてform reducerのparamが変わること
});
