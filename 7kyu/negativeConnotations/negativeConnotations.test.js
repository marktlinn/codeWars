const connotation = require("./negativeConnotations");

describe("Basic unit tests", () => {
  it("True", () => {
    expect(connotation("A big brown fox caught a bad bunny")).toEqual(true);
  });
  it("False", () => {
    expect(connotation("Xylophones can obtain Xenon.")).toEqual(false);
  });
  it("All caps", () => {
    expect(connotation("CHOCOLATE MAKES A GREAT SNACK")).toEqual(true);
  });
  it("Random case", () => {
    expect(connotation("All FOoD tAsTEs NIcE for someONe")).toEqual(true);
  });
  it("Random number of spaces", () => {
    expect(connotation("Is  this the  best  Kata?")).toEqual(true);
  });
});
