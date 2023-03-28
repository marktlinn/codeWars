const removeSmallest = require("./removeTheMinimum");

describe("Tests to remove only one minimum value", () => {
  it("Basic tests", () => {
    expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
    expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
  });
});
