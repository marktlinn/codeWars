const portion = require("./portionOfArray");

describe("Code challenge functionality tests", () => {
  it("should ", () => {
    expect(portion([1, 2, 3, 4], 1, 2)).toEqual([2, 3]);
  });
  it("should ", () => {
    expect(portion([1, 2, 3, 4], -1, 2)).toEqual([2, 3]);
  });
  it("should return -1 when portion(3rd) argument is out of range", () => {
    expect(portion([1], 1, 5)).toEqual(-1);
  });
});
