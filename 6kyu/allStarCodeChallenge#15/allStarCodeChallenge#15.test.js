const rotate = require("./allStarCodeChallenge#15");

describe("Base tests for rotate strins arrays", () => {
  it("should return an array of words, showing the rotation of the letter from right to left ", () => {
    expect(rotate("Hello")).toEqual([
      "elloH",
      "lloHe",
      "loHel",
      "oHell",
      "Hello",
    ]);
  });
  it("should return an array of words, showing the rotation of the letter from right to left with short strings ", () => {
    expect(rotate("Boo")).toEqual(["ooB", "oBo", "Boo"]);
  });
  it("should an Array of the same length as the input array", () => {
    expect(rotate("BlastOff").length).toBe(8);
  });
});
