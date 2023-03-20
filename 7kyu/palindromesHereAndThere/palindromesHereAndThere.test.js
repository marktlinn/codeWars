const convertPalindromes = require("./palindromesHereAndThere");

describe("Example Tests", () => {
  it("should return [1, 1, 0, 0, 0] on [22, 303, 76, 411, 89]", () => {
    expect(convertPalindromes([22, 303, 76, 411, 89])).toEqual([1, 1, 0, 0, 0]);
  });
  it("should return [0, 0, 1] on [653, 808, 5]", () => {
    expect(convertPalindromes([653, 808, 5])).toEqual([0, 1, 1]);
  });
  it("should return [1, 0, 0, 1, 0, 1] on [4, 23, 441, 565, 19, 818]", () => {
    expect(convertPalindromes([4, 23, 441, 565, 19, 818])).toEqual([
      1, 0, 0, 1, 0, 1,
    ]);
  });
});
