const add = require("./decreasingInputs");

describe("Sample tests", () => {
  it("add() = 0", () => {
    expect(add()).toEqual(0);
  });

  it("add(100, 200, 300) = 300", () => {
    expect(add(100, 200, 300)).toEqual(300);
  });

  it("add(2) = 2", () => {
    expect(add(2)).toEqual(2);
  });

  it("add(4, -3, -2) = 2", () => {
    expect(add(4, -3, -2)).toEqual(2);
  });

  it("add(-1, -2, -3, -4) = -4", () => {
    expect(add(-1, -2, -3, -4)).toEqual(-4);
  });
});
