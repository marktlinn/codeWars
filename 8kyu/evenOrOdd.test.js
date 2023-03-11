const even_or_odd = require("./evenOrOdd");

describe("Check if number is even or odd", () => {
  it("Even", () => {
    expect(even_or_odd(2)).toEqual("Even");
  });
  it("Odd", () => {
    expect(even_or_odd(3)).toEqual("Odd");
  });
});
