const validSpacing = require("./validSpacing");

describe("Code challenge functionality tests", () => {
  it("should return true for singular space between words", () => {
    expect(validSpacing("Hello world")).toEqual(true);
  });
  it("should return false for extra space at start of string", () => {
    expect(validSpacing(" Hello world")).toEqual(false);
  });
  it("should should return false for extra trailing spaces", () => {
    expect(validSpacing("Hello  world ")).toEqual(false);
  });
  it("should return true for no spaces", () => {
    expect(validSpacing("Helloworld")).toEqual(true);
  });
  it("should return true singular spaces between letters", () => {
    expect(validSpacing("c o d e w a r s")).toEqual(true);
  });
});
