const secondSymbol = require("./findIndexOfSecondOccurence");

describe("Code challenge functionality tests", () => {
  it("should return the second index position of 'l'", () => {
    expect(secondSymbol("Hello world!!!", "l")).toEqual(3);
  });
  it("should return the second index position of 'o'", () => {
    expect(secondSymbol("Hello world!!!", "o")).toEqual(7);
  });
  it("should return -1 as the value 'A' never occurs", () => {
    expect(secondSymbol("Hello world!!!", "A")).toEqual(-1);
  });
  it("should return -1 as the value 'q' never occurs", () => {
    expect(secondSymbol("", "q")).toEqual(-1);
  });
  it("should return -1 as the value '!' never occurs", () => {
    expect(secondSymbol("Hello", "!")).toEqual(-1);
  });
});
