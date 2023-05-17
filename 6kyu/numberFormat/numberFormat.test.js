const numberFormat = require("./numberFormat");

describe("Code challenge functionality tests", () => {
  it("should ", () => {
    expect(numberFormat(100000)).toEqual("100,000");
  });
  it("should ", () => {
    expect(numberFormat(5678545)).toEqual("5,678,545");
  });
  it("should ", () => {
    expect(numberFormat(-420902)).toEqual("-420,902");
  });
});
