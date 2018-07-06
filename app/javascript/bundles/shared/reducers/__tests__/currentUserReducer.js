import currentUserReducer from "../currentUserReducer";

describe("currentUserReducer", () => {
  it("stateを返すこと", () => {
    const returnedState = currentUserReducer({ name: "test" });
    expect(returnedState).toEqual({ name: "test" });
  });
});
