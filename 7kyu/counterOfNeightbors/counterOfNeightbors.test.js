const onesCounter = require("./counterOfNeightbors");

describe("Code challenge functionality tests", () => {
  it("should return a empty array when no postive ints present", () => {
    expect(onesCounter([0, 0, 0, 0, 0, 0, 0, 0])).toEqual([]);
  });
  it("should return count for contiguous elements of positive ints", () => {
    expect(onesCounter([1, 1, 1, 1, 1])).toEqual([5]);
  });
  it("should ignore zeros and return counts of only contiguous ints", () => {
    expect(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0])).toEqual([3, 1, 2]);
  });
  it("should ignore zeros and return counts of only contiguous ints", () => {
    expect(onesCounter([0, 0, 0, 1, 0, 0, 1, 1])).toEqual([1, 2]);
  });
  it("should ignore zeros and return counts of only contiguous ints", () => {
    expect(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1])).toEqual([
      1, 2, 4, 1,
    ]);
  });
});
