const areEquallyStrong = require("./equallyStrong");

describe("Test equality of strength", () => {
  it("Should return Boolean: true", () => {
    expect(areEquallyStrong(10, 15, 15, 10)).toEqual(true);
  });
  it("Should return Boolean: true", () => {
    expect(areEquallyStrong(15, 10, 15, 10)).toEqual(true);
  });
  it("Should return Boolean: true", () => {
    expect(areEquallyStrong(10, 10, 10, 10)).toEqual(true);
  });
  it("Should return Boolean: false", () => {
    expect(areEquallyStrong(15, 10, 15, 9)).toEqual(false);
  });
  it("Should return Boolean: true", () => {
    expect(areEquallyStrong(10, 5, 5, 10)).toEqual(true);
  });
  it("Should return Boolean: false", () => {
    expect(areEquallyStrong(1, 10, 10, 0)).toEqual(false);
  });
  it("Should return Boolean: false", () => {
    expect(areEquallyStrong(10, 5, 11, 4)).toEqual(false);
  });
});
