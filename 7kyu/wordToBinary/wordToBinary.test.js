const wordToBin = require("./wordToBinary");

describe("Test letter binary conversions", () => {
  it("should return [ '01101101', '01100001', '01101110' ] for `man` ", () => {
    expect(wordToBin("man")).toEqual(["01101101", "01100001", "01101110"]);
  });
  it("should return [ '01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111' ]  for `wecking`", () => {
    expect(wordToBin("wecking")).toEqual([
      "01110111",
      "01100101",
      "01100011",
      "01101011",
      "01101001",
      "01101110",
      "01100111",
    ]);
  });
  it("should return ['01000001', '01000010']", () => {
    expect(wordToBin("AB")).toEqual(["01000001", "01000010"]);
  });
});
