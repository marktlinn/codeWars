const { multiFilter, isGTten, isEven, isOdd } = require("./multiFilter");

describe("Simple tests", () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let result = undefined;

  it("shouldn't filter without filter function", function () {
    result = testArray.filter(multiFilter());
    expect(result).toEqual(testArray);
  });

  it("should filter with filter evens function", function () {
    result = testArray.filter(multiFilter(isEven));
    expect(result).toEqual([2, 4, 6, 8, 10, 12, 14, 16]);
  });

  it("should filter with filter odds function", function () {
    result = testArray.filter(multiFilter(isOdd));
    expect(result).toEqual([1, 3, 5, 7, 9, 11, 13, 15]);
  });
});
