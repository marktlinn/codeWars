const myLanguages = require("./myLanguageSkills");

describe("Fixed tests", function () {
  it("Should return ['Ruby', 'Python']", () => {
    expect(myLanguages({ Java: 10, Ruby: 80, Python: 65 })).toEqual([
      "Ruby",
      "Python",
    ]);
  });
  it("Should return ['Dutch', 'Greek', 'Hindi']", () => {
    expect(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })).toEqual([
      "Dutch",
      "Greek",
      "Hindi",
    ]);
  });
  it("Should return []", () => {
    expect(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })).toEqual([]);
  });
});
