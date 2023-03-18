const scoreTest = require("./scoringTests");

describe("Should return 9", () => {
  it("[0, 0, 0, 0, 2, 1, 0], 2, 0, 1) should equal 9", () => {
    expect(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)).toBe(9);
  });
  it("[0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2) should equal 3", () => {
    expect(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)).toBe(3);
  });
});

//    assert.strictEqual(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);
// assert.strictEqual(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2), 3);
