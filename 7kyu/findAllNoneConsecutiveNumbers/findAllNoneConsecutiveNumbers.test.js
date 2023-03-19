const allNonConsecutive = require("./findAllNoneConsecutiveNumbers");

describe("", () => {
  it("Should return non consecutive number's index and non consecutive number", () => {
    expect(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10])).toEqual([
      { i: 4, n: 6 },
      { i: 7, n: 10 },
    ]);
  });
  it("Should return non consecutive number's index and non consecutive number", () => {
    expect(allNonConsecutive([18, 19, 20, 21, 22, 25, 26])).toEqual([
      { i: 5, n: 25 },
    ]);
  });
  it("Only consecutive numbers should return an empty array", () => {
    expect(allNonConsecutive([17, 18, 19, 20, 21, 22, 23, 25, 26])).toEqual([
      { i: 7, n: 25 },
    ]);
  });
  it("", () => {
    expect(allNonConsecutive([7, 8, 9, 10, 11, 12, 13, 14])).toEqual([]);
  });
  it("Empty arrays should return only an empty array", () => {
    expect(allNonConsecutive([])).toEqual([]);
  });
});
