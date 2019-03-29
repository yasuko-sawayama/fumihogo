import loadReducer from "../loadReducer";

describe("ロード中の状態テスト", function() {
  it("init: false", function() {
    expect(loadReducer(undefined, { type: "@init" })).toEqual(false);
  });
});
