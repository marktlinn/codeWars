const mispelled = require("./mispelledWord");

describe("Sample test for mispelledWord function", () => {
  it("To be true", () => {
    expect(mispelled("versed", "xersed")).toEqual(true);
  });
  it("To be false", () => {
    expect(mispelled("versed", "applb")).toEqual(false);
  });

  it("To be true", () => {
    expect(mispelled("versed", "v5rsed")).toEqual(true);
  });
  it("To be true", () => {
    expect(mispelled("1versed", "versed")).toEqual(true);
  });
  it("To be true", () => {
    expect(mispelled("versed", "versed1")).toEqual(true);
  });
});
