const String = require("./regexBasics_isItALetter");

describe("String prototype tests", () => {
  it("Multiple chars should return false", () => {
    expect("ab".isLetter()).toBeFalsy();
  });
  it("Single letter should return true ", () => {
    expect("a".isLetter()).toBeTruthy();
  });
  it("Empty strings should return false ", () => {
    expect("".isLetter()).toBeFalsy();
  });
  it("Numbers as string should return false ", () => {
    expect("134".isLetter()).toBeFalsy();
  });
  it("Single number as string should return false ", () => {
    expect("1".isLetter()).toBeFalsy();
  });
  it("Special character should return false ", () => {
    expect("_".isLetter()).toBeFalsy();
  });
  it("Special characters should return false ", () => {
    expect("_*?".isLetter()).toBeFalsy();
  });
});
