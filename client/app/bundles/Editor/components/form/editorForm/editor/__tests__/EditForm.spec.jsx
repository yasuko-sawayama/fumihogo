import React from "react";
import { shallow } from "enzyme";
import { EditForm } from "../../../EditForm";

const props = {
  handleSubmit: jest.fn(),
  pristine: false,
  submitting: false,
  change: jest.fn(),
  fetchPageContent: jest.fn(),
  submitChanges: jest.fn(),

  match: { params: { productId: 1 } }
};

const wrapper = shallow(<EditForm {...props} />);

describe("EditForm", function() {
  it("レンダリングできること", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });
});
