const switchDict = require("./swapItemsInADictionary");
//Array do not need to be sorted in object so the tests reflect that
describe("Objects should have their values and keys swapped", () => {
  it("should swap key and values", () => {
    const before = {
      Ice: "Cream",
      Age: "21",
      Light: "Cream",
      Double: "Cream",
    };

    const expectedAns = {
      Cream: ["Ice", "Double", "Light"],
      21: ["Age"],
    };
    expect(switchDict(before).Cream.sort()).toEqual(expectedAns.Cream.sort());
    expect(switchDict(before).Age).toEqual(expectedAns.Age);
  });
  it("should swap key and values", () => {
    let before = {
      Ice: "Cream",
      Heavy: "Cream",
      Light: "Cream",
      Double: "Cream",
    };

    let expectedAns = { Cream: ["Ice", "Double", "Light", "Heavy"] };
    expect(switchDict(before).Cream.sort()).toEqual(expectedAns.Cream.sort());
  });
});
