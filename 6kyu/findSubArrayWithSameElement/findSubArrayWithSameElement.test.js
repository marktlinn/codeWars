const findSubArrayWithSameElement = require("./findSubArrayWithSameElement");

describe("Basic tests to find correct subArray and return index where sub array starts and finishes(inclusive)", () => {
  it("should return [5,6]", () => {
    expect(
      findSubArrayWithSameElement([2, 1, 1, 1, 1, 3, 3, 4, 5, 1, 1, 1], 3)
    ).toEqual([5, 6]);
  });
  it("should return the last slice of subarray if multiple found of the same length", () => {
    expect(
      findSubArrayWithSameElement([2, 1, 1, 1, 1, 3, 3, 4, 5, 1, 1, 1, 1], 1)
    ).toEqual([9, 12]);
  });
  it("Should return [-1,-1] if number not in array", () => {
    expect(findSubArrayWithSameElement([1, 2, 3], 9)).toEqual([-1, -1]);
  });
  it("should return [0,0]", () => {
    expect(findSubArrayWithSameElement([1], 1)).toEqual([0, 0]);
  });
  it("should return the longest subArray", () => {
    expect(
      findSubArrayWithSameElement(
        [1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 4, 3, 5, 1, 1],
        1
      )
    ).toEqual([0, 4]);
  });
});
