const uniqueSum = require("./uniqueSum");

describe("Name of the group", () => {
  it("should return the sum of the unique characters in the array", () => {
    expect(uniqueSum([1, 2, 3])).toBe(6);
  });
  it("should return the sum of the unique characters in the array", () => {
    expect(uniqueSum([1, 3, 8, 1, 8])).toBe(12);
  });
  it("should return the sum of the unique characters in the array", () => {
    expect(uniqueSum([-1, -1, 5, 2, -7])).toBe(-1);
  });
  it("should return null for an empty array or null values", () => {
    expect(uniqueSum([])).toBe(null);
  });
  it("should return null for an empty array or null values", () => {
    expect(uniqueSum([null])).toBe(null);
  });
});
