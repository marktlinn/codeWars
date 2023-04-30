const explode = require("./arrayArrayArray");

describe("Code challenge functionality tests", () => {
  it("should ", () => {
    expect(explode([9, 3])).toEqual([
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
    ]);
  });
  it("should ", () => {
    expect(explode(["a", 3])).toEqual([
      ["a", 3],
      ["a", 3],
      ["a", 3],
    ]);
  });
  it("should ", () => {
    expect(explode([6, "c"])).toEqual([
      [6, "c"],
      [6, "c"],
      [6, "c"],
      [6, "c"],
      [6, "c"],
      [6, "c"],
    ]);
  });
  it("should ", () => {
    expect(explode(["a", "b"])).toEqual("Void!");
  });
  it("should ", () => {
    expect(explode(["a", 0])).toEqual([]);
  });
});
