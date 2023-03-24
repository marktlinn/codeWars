const convert = require("./ASCIILettersFromNumber");

describe("Basic test", () => {
  it("The correct Uppercase string should be returned", () => {
    expect(convert("65")).toEqual("A");
    expect(convert("656667")).toEqual("ABC");
    expect(convert("676584")).toEqual("CAT");
    expect(convert("73327673756932858080698267658369")).toEqual(
      "I LIKE UPPERCASE"
    );
  });
});
