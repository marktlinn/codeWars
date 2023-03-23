const toBcd = require("./binaryCodedDecimal");

describe("", () => {
  it("10 to convert to '0001 0000'", () => {
    expect(toBcd(10)).toEqual("0001 0000");
  });
  it("-10 to convert to '-0001 0000'", () => {
    expect(toBcd(-10)).toEqual("-0001 0000");
  });
  it("123456789 to convert to '0001 0010 0011 0100 0101 0110 0111 1000 1001'", () => {
    expect(toBcd(123456789)).toEqual(
      "0001 0010 0011 0100 0101 0110 0111 1000 1001"
    );
  });
});
