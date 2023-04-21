const findHack = require("./findCracker");

describe("Tests to test function output", () => {
  it("should return the names with the incorrect/hacked scores in an array", () => {
    const testArr = [
      ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
      ["name2", 120, ["B", "A", "A", "A"]],
      ["name3", 160, ["B", "A", "A", "A", "A"]],
      ["name4", 140, ["B", "A", "A", "C", "A"]],
    ];
    expect(findHack(testArr)).toEqual(["name2", "name4"]);
  });

  it("should return the names with the incorrect/hacked scores in an array", () => {
    const testArr = [
      ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
      ["name2", 110, ["B", "A", "A", "A"]],
      ["name3", 200, ["B", "A", "A", "C"]],
      ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]],
    ];
    expect(findHack(testArr)).toEqual(["name1", "name3"]);
  });

  it("should work also when there more than 5 B grades but not all are Bs", () => {
    const testArr = [
      ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
      ["name2", 200, ["A", "A", "A", "A", "A", "C", "B"]],
      ["name3", 200, ["A", "A", "A", "A", "A", "A", "A"]],
    ];
    expect(findHack(testArr)).toEqual(["name1", "name2"]);
  });
});
