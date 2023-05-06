const sumDigPow = require("./numbersRaisedToTheConsecutivePowers");

describe("Code challenge functionality tests", () => {
  it("should return all numbers in range", () => {
    expect(sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("should return all correct numbers in range", () => {
    expect(sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
  });
  it("should return only 89", () => {
    expect(sumDigPow(10, 100)).toEqual([89]);
  });
  it("should return an empty array when no numbers found", () => {
    expect(sumDigPow(90, 100)).toEqual([]);
  });
  it("should return only 135", () => {
    expect(sumDigPow(90, 150)).toEqual([135]);
  });
  it("should return only 89 & 135", () => {
    expect(sumDigPow(50, 150)).toEqual([89, 135]);
  });
  it("should return only 89 & 135", () => {
    expect(sumDigPow(10, 150)).toEqual([89, 135]);
  });
});
