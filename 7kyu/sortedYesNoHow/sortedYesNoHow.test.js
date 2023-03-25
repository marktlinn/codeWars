const isSortedAndHow = require("./sortedYesNoHow");

describe("Test properly checking if all elements of array are sorted decendingly. ascendingly or not", () => {
  it("All tests", () => {
    expect(isSortedAndHow([1, 2])).toEqual("yes, ascending");
    expect(isSortedAndHow([15, 7, 3, -8])).toEqual("yes, descending");
    expect(isSortedAndHow([15, 7, -8, 8])).toEqual("no");
    expect(isSortedAndHow([-10000, -9999, -9999])).toEqual("yes, ascending");
  });
});
